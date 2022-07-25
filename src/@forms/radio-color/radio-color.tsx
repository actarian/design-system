
import { Text } from '@components';
import { CssDefault } from '@components/button/button.css';
import { ComponentCssResponsiveProps, SizeVariant } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import RadioColorGroup from './radio-color-group';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  color?: string;
  size?: SizeVariant;
  children?: ReactNode;
};

export type RadioColorProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const StyledRadioColorInput = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

const StyledRadioColorButton = styled.div<RadioColorProps>`
  ${CssDefault}
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: var(--color-neutral-200);
  border: 2px solid var(--color-neutral-200);
  color: var(--color-neutral-700);
  outline: 2px solid transparent;
  outline-offset: 2px;

  input:not(:disabled):hover ~ &,
  input:not(:disabled):active ~ & {
    border-color: var(--color-neutral-400);
    color: var(--color-neutral-900);
  }

  input:focus ~ & {
    outline-color: var(--color-primary-100);
  }

  input:checked ~ &,
  input.active ~ & {
    outline-color: var(--color-primary-500);
  }

  input:disabled ~ &,
  input.disabled ~ & {
    pointer-events: none;
    opacity: 0.5;
  }

  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`

const StyledRadioColor = styled.div`
  position: relative;
  font-size: 0;
  line-height: 1;
  ${props => getCssResponsive(props)}
`

// // variant = 'radio',
const RadioColor = forwardRef<HTMLInputElement, RadioColorProps>(({
  color = 'white',
  children,
  className,
  ...props
}, ref) => (
  <StyledRadioColor>
    <StyledRadioColorInput ref={ref} as='input' type='radio' {...props} />
    <StyledRadioColorButton as="button" backgroundColor={color} size={props.size}>
      <Text.SROnly>{children}</Text.SROnly>
    </StyledRadioColorButton>
  </StyledRadioColor>
));

(RadioColor as IRadioColor).Group = RadioColorGroup;

export default RadioColor as IRadioColor;

type IRadioColor = typeof RadioColor & {
  Group: typeof RadioColorGroup;
};
