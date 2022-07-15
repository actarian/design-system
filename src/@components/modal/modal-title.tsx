import { ComponentProps } from '@components/types';
import React from 'react';
import styled from 'styled-components';

const defaultProps = {
  className: '',
};

interface Props {
  className?: string;
}

export type ModalTitleProps = ComponentProps<Props, HTMLDivElement>;

const StyledTitle = styled.h2`
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  word-break: break-word;
  text-transform: capitalize;
  line-height: 1.6;
  font-weight: normal;
  font-size: 1.5rem;
  color: var(--color-neutral-900);
`;

const ModalTitleComponent: React.FC<React.PropsWithChildren<ModalTitleProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalTitleProps> & typeof defaultProps) => { // !!! any
  return (
    <StyledTitle className={className} {...props}>
      {children}
    </StyledTitle>
  )
}

ModalTitleComponent.defaultProps = defaultProps;
ModalTitleComponent.displayName = 'ModalTitle';

export default ModalTitleComponent;
