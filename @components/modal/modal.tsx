import { KeyCode, useBodyScroll, useKeyboard, usePortal } from '@hooks';
import React, { MouseEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../backdrop/backdrop';
import ModalButton from './modal-button';
import { ModalConfig, ModalContext } from './modal-context';
import ModalFooter from './modal-footer';
import ModalWrapper from './modal-wrapper';

interface Props {
  width?: string;
  backdropClassName?: string;
  positionClassName?: string;
  layerClassName?: string;
  wrapClassName?: string;
  visible?: boolean;
  disableBackdropClick?: boolean;
  keyboard?: boolean;
  onClose?: () => void;
  onContentClick?: (event: MouseEvent<HTMLElement>) => void;
}

const defaultProps = {
  width: '26rem',
  backdropClassName: '',
  positionClassName: '',
  layerClassName: '',
  wrapClassName: '',
  disableBackdropClick: false,
  keyboard: true,
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type ModalProps = Props & NativeAttrs;

const ModalComponent: React.FC<React.PropsWithChildren<ModalProps | any>> =
  ({ width, backdropClassName, positionClassName, layerClassName, wrapClassName,
    disableBackdropClick, keyboard, visible: customVisible, onClose, children, onContentClick }: React.PropsWithChildren<ModalProps> & typeof defaultProps) => { // !!! any

    const portal = usePortal('modal');

    const [visible, setVisible] = useState<boolean>(false);

    const [, setBodyHidden] = useBodyScroll(null, { delayReset: 300 });

    const [buttonChildren, otherChildren] = getChildsByType(children, ModalButton);

    const hasButtons = buttonChildren && React.Children.count(buttonChildren) > 0;

    const close = () => {
      if (onClose) {
        onClose();
      }
      setVisible(false);
      setBodyHidden(false);
    }

    useEffect(() => {
      if (typeof customVisible === 'undefined') {
        return;
      }
      setVisible(customVisible);
      setBodyHidden(customVisible);
    }, [customVisible]);

    const { bindings } = useKeyboard(() => {
      if (keyboard) {
        close();
      }
    }, KeyCode.Escape, { disableGlobalEvent: true });

    const onBackdropClick = () => {
      if (!disableBackdropClick) {
        close();
      }
    }

    const modalContextValue: ModalConfig = useMemo(() => ({ close }), []);

    if (!portal) {
      return null;
    }

    return createPortal(
      <ModalContext.Provider value={modalContextValue}>
        <Backdrop width={width}
          positionClassName={positionClassName} backdropClassName={backdropClassName} layerClassName={layerClassName}
          visible={visible} onClick={onBackdropClick} onContentClick={onContentClick}
          {...bindings}>
          <ModalWrapper className={wrapClassName} visible={visible}>
            {otherChildren}
            {hasButtons && <ModalFooter>{buttonChildren}</ModalFooter>}
          </ModalWrapper>
        </Backdrop>
      </ModalContext.Provider>
      , portal);
  };

ModalComponent.defaultProps = defaultProps;
ModalComponent.displayName = 'Modal';

export function getChildsByType(children: ReactNode | undefined, child: React.ElementType): [ReactNode | undefined, ReactNode | undefined] {
  let items: ReactNode[] = [];
  const others = React.Children.map(children, (item) => {
    if (!React.isValidElement(item)) {
      return item;
    }
    if (item.type === child) {
      items.push(item);
      return null;
    }
    return item;
  });
  const childs = items.length >= 0 ? items : undefined;
  return [childs, others];
}

import ModalContent from './modal-content';
import ModalSubtitle from './modal-subtitle';
import ModalTitle from './modal-title';

export type ModalComponentType = typeof ModalComponent & {
  Title: typeof ModalTitle
  Subtitle: typeof ModalSubtitle
  Content: typeof ModalContent
  Button: typeof ModalButton
};

(ModalComponent as ModalComponentType).Title = ModalTitle;
(ModalComponent as ModalComponentType).Subtitle = ModalSubtitle;
(ModalComponent as ModalComponentType).Content = ModalContent;
(ModalComponent as ModalComponentType).Button = ModalButton;

export type { ModalButtonProps } from './modal-button';
export type { ModalContentProps } from './modal-content';
export type { ModalSubtitleProps } from './modal-subtitle';
export type { ModalTitleProps } from './modal-title';

export default ModalComponent as ModalComponentType;
