import { useClasses } from '@hooks/useClasses/useClasses';
import React, { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import CssTransition from './css-transition';

interface Props {
  className?: string;
  visible?: boolean;
}

const defaultProps = {
  className: '',
  visible: false,
};

export type ModalWrapperProps = Props;

const ModalWrapper: React.FC<React.PropsWithChildren<ModalWrapperProps | any>> = ({ className, children, visible, ...props }: React.PropsWithChildren<ModalWrapperProps> & typeof defaultProps) => { // !!! any

  const theme = useTheme();
  const modalContent = useRef<HTMLDivElement>(null);
  const tabStart = useRef<HTMLDivElement>(null);
  const tabEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) {
      return;
    }
    const activeElement = document.activeElement;
    const isChild = isChildElement(modalContent.current, activeElement);
    if (isChild) {
      return;
    }
    tabStart.current && tabStart.current.focus();
  }, [visible]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const isTabDown = event.keyCode === 9;
    if (!visible || !isTabDown) {
      return
    }
    const activeElement = document.activeElement;
    if (event.shiftKey) {
      if (activeElement === tabStart.current) {
        tabEnd.current && tabEnd.current.focus();
      }
    } else {
      if (activeElement === tabEnd.current) {
        tabStart.current && tabStart.current.focus();
      }
    }
  };

  return (
    <CssTransition name="wrapper" visible={visible} clearTime={300}>
      <div className={useClasses('wrapper', className)} role="dialog" tabIndex={-1} onKeyDown={onKeyDown} ref={modalContent}
        {...props}>
        <div tabIndex={0} className="hide-tab" aria-hidden="true" ref={tabStart} />
        {children}
        <div tabIndex={0} className="hide-tab" aria-hidden="true" ref={tabEnd} />
        <style jsx>{`
          .wrapper {
            max-width: 100%;
            vertical-align: middle;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            position: relative;
            box-sizing: border-box;
            background-color: ${(theme as any).color.neutral100};
            color: ${(theme as any).color.neutral900};
            border-radius: ${(theme as any).border.radius};
            box-shadow: ${(theme as any).shadow.lg};
            opacity: 0;
            outline: none;
            transform: translate3d(0px, -30px, 0px);
            transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s,
            transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;
            width: 100%;
            padding: 1.3125rem  var(--modal-wrapper-padding-right) 1.3125 var(--modal-wrapper-padding-left);
            margin: 0;
          }
          .wrapper-enter {
            opacity: 0;
            transform: translate3d(0px, -30px, 0px);
          }
          .wrapper-enter-active {
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
          }
          .wrapper-leave {
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
          }
          .wrapper-leave-active {
            opacity: 0;
            transform: translate3d(0px, -30px, 0px);
          }
          .hide-tab {
            outline: none;
            overflow: hidden;
            width: 0;
            height: 0;
            opacity: 0;
          }
        `}</style>
      </div>
    </CssTransition>
  )
}

ModalWrapper.defaultProps = defaultProps;
ModalWrapper.displayName = 'ModalWrapper';

export default ModalWrapper;

export function isChildElement(parent: Element | null | undefined, child: Element | null | undefined): boolean {
  if (!parent || !child) {
    return false;
  }
  let node: (Node & ParentNode) | null = child;
  while (node) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
