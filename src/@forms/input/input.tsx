import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { useClasses } from '@hooks';
import { ComponentPropsWithRef, forwardRef, useState } from 'react';
import styled from 'styled-components';

interface Props extends ComponentPropsWithRef<'input'> {
}

export type InputProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const StyledInput = styled.div<InputProps>`
  display: block;
  width: 100%;
  padding: var(--form-padding);
  appearance: none;
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  border: 2px solid;
  border-radius: var(--border-radius);
  color: inherit;
  background-color: transparent;
  border-color: var(--color-neutral-200);
  transition: border 150ms ease-in 0s, outline-color 150ms ease-in 0s, color 200ms ease-out 0s;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }

  &.active:not(.disabled),
  &:hover:not(.disabled) {
    border-color: var(--color-neutral-300);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-200);
    outline-offset: 2px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  &::placeholder {
    color: inherit;
    opacity: 0.3;
  }

  ${props => getCssResponsive(props)}
`;

const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  className,
  onFocus,
  onBlur,
  ...props }, ref) => {
  const [focus, setFocus] = useState<boolean>(false);
  const classNames = useClasses('input', {
    focus,
    disabled: props.disabled,
    readonly: props.readOnly,
    hidden: props.hidden,
  }, className);
  const onFocus_ = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(event);
    setFocus(true);
  }
  const onBlur_ = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event);
    setFocus(false);
  }
  return (
    <StyledInput ref={ref} className={classNames} as='input' type={type} onFocus={onFocus_} onBlur={onBlur_} {...props} />
  );
});

Input.displayName = 'Input';

export default Input;
