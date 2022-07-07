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
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type ModalProps = Props & NativeAttrs;

const ModalComponent: React.FC<React.PropsWithChildren<ModalProps | any>> = ({ // !!! any
  visible: customVisible,
  onClose,
  children,
  keyboard,
  wrapClassName,
  onContentClick,
  disableBackdropClick,
  positionClassName,
  backdropClassName,
  layerClassName,
}: React.PropsWithChildren<ModalProps> & typeof defaultProps) => {
  const portal = usePortal('modal');
  const [, setBodyHidden] = useBodyScroll(null, { delayReset: 300 });
  const [visible, setVisible] = useState<boolean>(false);
  const [withoutActionsChildren, ActionsChildren] = pickChild(children, ModalAction);
  const hasActions = ActionsChildren && React.Children.count(ActionsChildren) > 0;

  const closeModal = () => {
    onClose && onClose()
    setVisible(false)
    setBodyHidden(false)
  }

  useEffect(() => {
    if (typeof customVisible === 'undefined') {
      return;
    }
    setVisible(customVisible);
    setBodyHidden(customVisible);
  }, [customVisible]);

  const { bindings } = useKeyboard(() => {
      keyboard && closeModal();
    }, KeyCode.Escape, { disableGlobalEvent: true });

  const closeFromBackdrop = () => {
    if (disableBackdropClick) {
      return;
    }
    closeModal();
  }

  const modalConfig: ModalConfig = useMemo(() => ({
    close: closeModal
  }), []);

  if (!portal) {
    return null;
  }

  return createPortal(
    <ModalContext.Provider value={modalConfig}>
      <Backdrop
        onClick={closeFromBackdrop}
        onContentClick={onContentClick}
        visible={visible}
        width={'26rem'}
        positionClassName={positionClassName}
        backdropClassName={backdropClassName}
        layerClassName={layerClassName}
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
ModalComponent.displayName = 'GeistModal';

export default ModalComponent;


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
