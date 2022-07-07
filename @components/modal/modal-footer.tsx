import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  ${props => (css`
    border-top: 1px solid ${props.theme.color.neutral300};
    border-bottom-left-radius: ${props.theme.border.radius};
    border-bottom-right-radius: ${props.theme.border.radius};
    & > :global(button.btn + button.btn) {
      border-left: 1px solid ${props.theme.color.neutral300};
    }
  `)}
`;

const ModalFooterComponent: React.FC<React.PropsWithChildren<unknown>> = ({ children, ...props }) => {

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
      <div style={{ height, flexShrink: 0 }} />
      <StyledFooter ref={ref} {...props}>
        {children}
      </StyledFooter>
    </>
  )
}

ModalFooterComponent.displayName = 'ModalFooter';

const ModalFooter = React.memo(ModalFooterComponent);

export default ModalFooter;
