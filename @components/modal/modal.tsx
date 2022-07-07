import { useBodyScroll } from '@hooks/useBodyScroll/useBodyScroll';
import { KeyCode, useKeyboard } from '@hooks/useKeyboard/useKeyboard';
import { usePortal } from '@hooks/usePortal/usePortal';
import React, { MouseEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../backdrop/backdrop';
import ModalAction from './modal-action';
import ModalActions from './modal-actions';
import { ModalConfig, ModalContext } from './modal-context';
import ModalWrapper from './modal-wrapper';

interface Props {
  disableBackdropClick?: boolean;
  onClose?: () => void;
  onContentClick?: (event: MouseEvent<HTMLElement>) => void;
  visible?: boolean;
  keyboard?: boolean;
  wrapClassName?: string;
  positionClassName?: string;
  backdropClassName?: string;
  layerClassName?: string;
}

const defaultProps = {
  wrapClassName: '',
  keyboard: true,
  disableBackdropClick: false,
  positionClassName: '',
  backdropClassName: '',
  layerClassName: '',
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type ModalProps = Props & NativeAttrs;

const ModalComponent: React.FC<React.PropsWithChildren<ModalProps | any>> =
  ({ visible: customVisible, onClose, children, keyboard, wrapClassName, onContentClick, disableBackdropClick, positionClassName, backdropClassName, layerClassName }: React.PropsWithChildren<ModalProps> & typeof defaultProps) => { // !!! any

    const portal = usePortal('modal');

    const [, setBodyHidden] = useBodyScroll(null, { delayReset: 300 });

    const [visible, setVisible] = useState<boolean>(false);

    const [withoutActionsChildren, ActionsChildren] = pickChild(children, ModalAction);

    const hasActions = ActionsChildren && React.Children.count(ActionsChildren) > 0;

    const closeModal = () => {
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
        closeModal();
      }
    }, KeyCode.Escape, { disableGlobalEvent: true });

    const closeFromBackdrop = () => {
      if (disableBackdropClick) {
        return;
      }
      closeModal();
    }

    const modalConfig: ModalConfig = useMemo(() => ({ close: closeModal }), []);

    if (!portal) {
      return null;
    }

    return createPortal(
      <ModalContext.Provider value={modalConfig}>
        <Backdrop width={'26rem'}
          positionClassName={positionClassName} backdropClassName={backdropClassName} layerClassName={layerClassName}
          onClick={closeFromBackdrop} onContentClick={onContentClick} visible={visible}
          {...bindings}>
          <ModalWrapper visible={visible} className={wrapClassName}>
            {withoutActionsChildren}
            {hasActions && <ModalActions>{ActionsChildren}</ModalActions>}
          </ModalWrapper>
        </Backdrop>
      </ModalContext.Provider>,
      portal,
    );
  }

ModalComponent.defaultProps = defaultProps;
ModalComponent.displayName = 'Modal';

export function pickChild(children: ReactNode | undefined, child: React.ElementType): [ReactNode | undefined, ReactNode | undefined] {
  let targets: ReactNode[] = [];
  const withoutTargetChildren = React.Children.map(children, (item) => {
    if (!React.isValidElement(item)) {
      return item;
    }
    if (item.type === child) {
      targets.push(item);
      return null;
    }
    return item;
  });
  const targetChildren = targets.length >= 0 ? targets : undefined;
  return [withoutTargetChildren, targetChildren];
}

import ModalContent from './modal-content';
import ModalSubtitle from './modal-subtitle';
import ModalTitle from './modal-title';

export type ModalComponentType = typeof ModalComponent & {
  Title: typeof ModalTitle
  Subtitle: typeof ModalSubtitle
  Content: typeof ModalContent
  Action: typeof ModalAction
};

(ModalComponent as ModalComponentType).Title = ModalTitle;
(ModalComponent as ModalComponentType).Subtitle = ModalSubtitle;
(ModalComponent as ModalComponentType).Content = ModalContent;
(ModalComponent as ModalComponentType).Action = ModalAction;

export type { ModalActionProps } from './modal-action';
export type { ModalContentProps } from './modal-content';
export type { ModalSubtitleProps } from './modal-subtitle';
export type { ModalTitleProps } from './modal-title';

export default ModalComponent as ModalComponentType;
