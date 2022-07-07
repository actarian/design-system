import { useClasses } from '@hooks';
import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const defaultProps = {
  className: '',
};

type NativeAttrs = Omit<React.HTMLAttributes<HTMLElement>, keyof Props>;

export type ModalContentProps = Props & NativeAttrs;

const StyleContent = styled.div`
  position: relative;
  text-align: left;
  font-size: 1rem;
  padding: 1.3125rem 1.3125rem 0.6625rem 1.3125rem;
  margin: 0;

  & > :global(*:first-child) {
    margin-top: 0;
  }
  & > :global(*:last-child) {
    margin-bottom: 0;
  }
`;

const ModalContentComponent: React.FC<React.PropsWithChildren<ModalContentProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalContentProps> & typeof defaultProps) => { // !!! any
  return (
    <StyleContent className={useClasses('content', className)} {...props}>
      {children}
    </StyleContent>
  )
}

ModalContentComponent.defaultProps = defaultProps;
ModalContentComponent.displayName = 'ModalContent';

export default ModalContentComponent;
