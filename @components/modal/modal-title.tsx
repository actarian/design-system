import { useTheme } from '@hooks/useTheme/useTheme';
import React from 'react';

const defaultProps = {
  className: '',
}

const ModalTitleComponent: React.FC<React.PropsWithChildren<ModalTitleProps | any>> = ({ // !!! any
  className,
  children,
  ...props
}: React.PropsWithChildren<ModalTitleProps> & typeof defaultProps) => {
  const theme = useTheme()

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
          color: ${theme.palette.foreground};
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}

interface Props {
  className?: string
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type ModalTitleProps = Props & NativeAttrs;

ModalTitleComponent.defaultProps = defaultProps
ModalTitleComponent.displayName = 'GeistModalTitle'
export default ModalTitleComponent;
