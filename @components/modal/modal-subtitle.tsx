import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const defaultProps = {
  className: '',
};

const StyledSubtitle = styled.div`
  font-weight: normal;
  display: inline-block;
  text-align: center;
  word-break: break-word;
  text-transform: uppercase;
  color: ${props => props.theme.color.primary500};
  font-size: 0.875rem;
  line-height: 1.5em;
  padding: 0;
  margin: 0;
`;

const ModalSubtitleComponent: React.FC<React.PropsWithChildren<ModalSubtitleProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalSubtitleProps> & typeof defaultProps) => { // !!! any

  return (
    <StyledSubtitle className={className} {...props}>
        {children}
    </StyledSubtitle>
  )
}

ModalSubtitleComponent.defaultProps = defaultProps;
ModalSubtitleComponent.displayName = 'ModalSubtitle';

export default ModalSubtitleComponent;

type NativeAttrs = Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>;

export type ModalSubtitleProps = Props & NativeAttrs;
