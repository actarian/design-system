import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

const ModalActionsComponent: React.FC<React.PropsWithChildren<unknown>> = ({ children, ...props }) => {

  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>('auto');

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setHeight(`${ref.current.clientHeight}px`);
  }, [ref]);

  return (
    <>
      <div />
      <footer ref={ref} {...props}>
        {children}
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          overflow: hidden;
          width: 100%;
          height: auto;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          border-top: 1px solid ${(theme as any).color.neutral300};
          border-bottom-left-radius: ${(theme as any).border.radius};
          border-bottom-right-radius: ${(theme as any).border.radius};
        }
        footer > :global(button.btn + button.btn) {
          border-left: 1px solid ${(theme as any).color.neutral300};
        }
        div {
          height: ${height};
          flex-shrink: 0;
        }
      `}</style>
    </>
  )
}

ModalActionsComponent.displayName = 'ModalActions';

const ModalActions = React.memo(ModalActionsComponent);

export default ModalActions;
