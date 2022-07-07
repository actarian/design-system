import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const defaultProps = {
  className: '',
};

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
  color: ${props => props.theme.color.neutral900};
`;

const ModalTitleComponent: React.FC<React.PropsWithChildren<ModalTitleProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalTitleProps> & typeof defaultProps) => { // !!! any
  return (
    <StyledTitle className={className} {...props}>
      {children}
    </StyledTitle>
  )
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type ModalTitleProps = Props & NativeAttrs;

ModalTitleComponent.defaultProps = defaultProps;
ModalTitleComponent.displayName = 'ModalTitle';

export default ModalTitleComponent;
