import { useTheme } from '@hooks/useTheme/useTheme'
import React from 'react'

interface Props {
  className?: string
}

const defaultProps = {
  className: '',
}

type NativeAttrs = Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>
export type ModalSubtitleProps = Props & NativeAttrs

const ModalSubtitleComponent: React.FC<React.PropsWithChildren<ModalSubtitleProps | any>> = ({ // !!! any
  className,
  children,
  ...props
}: React.PropsWithChildren<ModalSubtitleProps> & typeof defaultProps) => {
  const theme = useTheme()
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
          color: ${theme.palette.accents_5};
          font-size: 0.875rem;
          line-height: 1.5em;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}

ModalSubtitleComponent.defaultProps = defaultProps
ModalSubtitleComponent.displayName = 'GeistModalSubtitle'
export default ModalSubtitleComponent;
