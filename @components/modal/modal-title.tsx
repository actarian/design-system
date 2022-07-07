import React from 'react';
import { useTheme } from 'styled-components';

const defaultProps = {
  className: '',
};

const ModalTitleComponent: React.FC<React.PropsWithChildren<ModalTitleProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalTitleProps> & typeof defaultProps) => { // !!! any

  const theme = useTheme();

  return (
    <>
      <h2 className={className} {...props}>
        {children}
      </h2>
      <style jsx>{`
        h2 {
          line-height: 1.6;
          font-weight: normal;
          text-align: center;
          display: inline-flex;
          flex-shrink: 0;
          justify-content: center;
          align-items: center;
          word-break: break-word;
          text-transform: capitalize;
          font-size: 1.5rem;
          color: ${(theme as any).color.neutral900};
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}

interface Props {
  className?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type ModalTitleProps = Props & NativeAttrs;

ModalTitleComponent.defaultProps = defaultProps;
ModalTitleComponent.displayName = 'ModalTitle';

export default ModalTitleComponent;
