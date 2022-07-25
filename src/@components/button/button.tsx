import { ComponentCssResponsiveProps, SizeVariant, Variant, Variants } from '@components/types';
import { getCssResponsive, getVariant } from '@components/utils';
import { useClasses } from '@hooks';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { CssButtonAlfa, CssButtonBeta, CssButtonCircle, CssButtonDefault, CssButtonDelta, CssButtonEpsilon, CssButtonEta, CssButtonGamma, CssButtonZeta, CssDefault } from './button.css';

const variants: Variants = {
  default: CssButtonDefault,
  alfa: CssButtonAlfa,
  beta: CssButtonBeta,
  gamma: CssButtonGamma,
  delta: CssButtonDelta,
  epsilon: CssButtonEpsilon,
  zeta: CssButtonZeta,
  eta: CssButtonEta,
  circle: CssButtonCircle,
};

interface Props extends ComponentPropsWithRef<'button'> {
  variant?: Variant;
  size?: SizeVariant;
  // htmlType?: React.ButtonHTMLAttributes<any>['type']
  // onClick?: React.MouseEventHandler<HTMLButtonElement>
};

export type ButtonProps = ComponentCssResponsiveProps<Props, HTMLButtonElement>;

const StyledButton = styled.div<ButtonProps>`
  ${CssDefault}
  ${props => getVariant(variants, props.variant)}
  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const className = useClasses('button', { disabled: props.disabled });
  return (<StyledButton ref={ref} className={className} as="button" {...props}>{props.children}</StyledButton>);
});

export default Button;
