import Button, { ButtonProps } from '@components/button/button';
import { useClasses } from '@hooks/useClasses/useClasses';
import React, { MouseEvent, useImperativeHandle, useMemo, useRef } from 'react';
import styled, { css, useTheme } from 'styled-components';
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

const ModalActionComponent = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<ModalActionProps | any> // !!! any
>(
  (
    { className, children, onClick, passive, disabled, ...props }: React.PropsWithChildren<ModalActionProps> & typeof defaultProps, ref: React.Ref<HTMLButtonElement | null>) => {

    const theme = useTheme();

    const btnRef = useRef<HTMLButtonElement>(null);

    const { close } = useModalContext();

    useImperativeHandle(ref, () => btnRef.current);

    const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        return;
      }
      const actionEvent = Object.assign({}, event, {
        close: () => close && close(),
      });
      if (onClick) {
        onClick(actionEvent);
      }
    }

    const color = useMemo(() => {
      return passive ? (theme as any).color.primary500 : (theme as any).color.neutral900;
    }, [(theme as any).color, passive, disabled]);

    const bgColor = useMemo(() => {
      return disabled ? (theme as any).color.primary100 : (theme as any).color.neutral100;
    }, [(theme as any).color, disabled]);

    // const { className: resolveClassName, styles } = css`
    const resolveClassName = '.my-class'; // !!!

    const StyledButton = styled(Button)`
      button.btn {
        font-size: 0.75rem;
        border: none;
        color: ${color};
        background-color: ${(theme as any).color.neutral100};
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 3.5625rem;
        border-radius: 0;
        min-width: 0;
      }
      button.btn:hover,
      button.btn:focus {
        color: ${disabled ? color : (theme as any).color.neutral900};
        background-color: ${disabled ? bgColor : (theme as any).color.primary100};
      }
    `;

    const styles = css`
        button.btn {
        font-size: 0.75rem;
        border: none;
        color: ${color};
        background-color: ${(theme as any).color.neutral100};
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 3.5625rem;
        border-radius: 0;
        min-width: 0;
      }
      button.btn:hover,
      button.btn:focus {
        color: ${disabled ? color : (theme as any).color.neutral900};
        background-color: ${disabled ? bgColor : (theme as any).color.primary100};
      }
    `
    const classes = useClasses(resolveClassName, className);

    const overrideProps = { ...props, effect: false, ref: btnRef };

    return (
      <StyledButton className={classes} onClick={clickHandler}
        // disabled={disabled} // !!!
        {...overrideProps}>
        {children}
        {styles}
      </StyledButton>
    )
  },
)

ModalActionComponent.defaultProps = defaultProps;
ModalActionComponent.displayName = 'ModalAction';

export default ModalActionComponent;
