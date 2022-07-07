import { useClasses } from '@hooks/useClasses/useClasses'
import React from 'react'

interface Props {
  className?: string
}

const defaultProps = {
  className: '',
}

type NativeAttrs = Omit<React.HTMLAttributes<HTMLElement>, keyof Props>
export type ModalContentProps = Props & NativeAttrs

const ModalContentComponent: React.FC<React.PropsWithChildren<ModalContentProps | any>> = ({ // !!! any
  className,
  children,
  ...props
}: React.PropsWithChildren<ModalContentProps> & typeof defaultProps) => {
  return (
    <>
      <div className={useClasses('content', className)} {...props}>
        {children}
      </div>
      <style jsx>{`
        .content {
          position: relative;
          text-align: left;
          font-size: 1rem;
          width: 500px;
          height: 400px;
          padding: 1.3125rem 1.3125rem 0.6625rem 1.3125rem;
          margin: 0 0 0 0;
        }
        .content > :global(*:first-child) {
          margin-top: 0;
        }
        .content > :global(*:last-child) {
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}

ModalContentComponent.defaultProps = defaultProps
ModalContentComponent.displayName = 'GeistModalContent'
export default ModalContentComponent
