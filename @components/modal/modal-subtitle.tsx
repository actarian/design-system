import React from 'react';
import { useTheme } from "styled-components";

interface Props {
  className?: string;
}

const defaultProps = {
  className: '',
};

type NativeAttrs = Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>;

export type ModalSubtitleProps = Props & NativeAttrs;

const ModalSubtitleComponent: React.FC<React.PropsWithChildren<ModalSubtitleProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalSubtitleProps> & typeof defaultProps) => { // !!! any

  const theme = useTheme();

  return (
    <>
      <p className={className} {...props}>
        {children}
      </p>
      <style jsx>{`
        p {
          font-weight: normal;
          display: inline-block;
          text-align: center;
          word-break: break-word;
          text-transform: uppercase;
          color: ${(theme as any).color.primary500};
          font-size: 0.875rem;
          line-height: 1.5em;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}

ModalSubtitleComponent.defaultProps = defaultProps;
ModalSubtitleComponent.displayName = 'ModalSubtitle';

export default ModalSubtitleComponent;
