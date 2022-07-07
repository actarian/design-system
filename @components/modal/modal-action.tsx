import Button, { ButtonProps } from '@components/button/button';
import { useClasses } from '@hooks/useClasses/useClasses';
import { useTheme } from '@hooks/useTheme/useTheme';
import React, { MouseEvent, useImperativeHandle, useMemo, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useModalContext } from './modal-context';

type ModalActionEvent = MouseEvent<HTMLButtonElement> & {
  close: () => void
}

interface Props {
  className?: string
  passive?: boolean
  disabled?: boolean
  onClick?: (event: ModalActionEvent) => void
}

const defaultProps = {
  className: '',
  passive: false,
  disabled: false,
}

export type ModalActionProps = Props & Omit<ButtonProps, keyof Props>

const ModalActionComponent = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ModalActionProps | any> // !!! any
>(
  (
    {
      className,
      children,
      onClick,
      passive,
      disabled,
      ...props
    }: React.PropsWithChildren<ModalActionProps> & typeof defaultProps,
    ref: React.Ref<HTMLButtonElement | null>,
  ) => {
    const theme = useTheme();
    const btnRef = useRef<HTMLButtonElement>(null)
    const { close } = useModalContext()
    useImperativeHandle(ref, () => btnRef.current)

    const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
      if (disabled) return
      const actionEvent = Object.assign({}, event, {
        close: () => close && close(),
      })
      onClick && onClick(actionEvent)
    }

    const color = useMemo(() => {
      return passive ? theme.palette.accents_5 : theme.palette.foreground
    }, [theme.palette, passive, disabled])

    const bgColor = useMemo(() => {
      return disabled ? theme.palette.accents_1 : theme.palette.background
    }, [theme.palette, disabled])

    // const { className: resolveClassName, styles } = css`
    const resolveClassName = '.my-class'; // !!!

    const StyledButton = styled(Button)`
      button.btn {
        font-size: 0.75rem;
        border: none;
        color: ${color};
        background-color: ${theme.palette.background};
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex: 1;
        height: 3.5625rem;
        border-radius: 0;
        min-width: 0;
      }
      button.btn:hover,
      button.btn:focus {
        color: ${disabled ? color : theme.palette.foreground};
        background-color: ${disabled ? bgColor : theme.palette.accents_1};
      }
    `;

    const styles = css`
        button.btn {
        font-size: 0.75rem;
        border: none;
        color: ${color};
        background-color: ${theme.palette.background};
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex: 1;
        height: 3.5625rem;
        border-radius: 0;
        min-width: 0;
      }
      button.btn:hover,
      button.btn:focus {
        color: ${disabled ? color : theme.palette.foreground};
        background-color: ${disabled ? bgColor : theme.palette.accents_1};
      }
    `
    const classes = useClasses(resolveClassName, className)

    const overrideProps = {
      ...props,
      effect: false,
      ref: btnRef,
    }

    return (
      <StyledButton
        className={classes}
        onClick={clickHandler}
        // disabled={disabled} // !!!
        {...overrideProps}>
        {children}
        {styles}
      </StyledButton>
    )
  },
)

ModalActionComponent.defaultProps = defaultProps
ModalActionComponent.displayName = 'GeistModalAction'
export default ModalActionComponent;
