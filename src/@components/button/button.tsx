import { ComponentCssResponsiveProps, SizeVariant, Variant, Variants } from '@components/types';
import { getCssResponsive, getVariant } from '@components/utils';
import { useClasses } from '@hooks';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';

const CssResponsive = css`
  @media (max-width: 399.9px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CssFocus = css`
  &:focus {
    outline: 2px solid var(--color-primary-100);
    outline-offset: 2px;
  }
`;

const CssActive = css`
  &:active,
  &.active {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }
`;

const CssDisabled = css`
  &:disabled,
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const CssSvg = css`
  svg {
    width: 1em;
    height: 1em;
    margin: 0 0.3em;
    transition: transform ease-in-out 200ms;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
  &:hover,
  &.active {
    svg {
      transform: scale(1.1);
    }
  }
`;

const CssUnderline = css`
  &>* {
    display: inline;
    background-image: linear-gradient(90deg, var(--color-secondary-500), currentColor);
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: 0% 0.1em;
    transition: background-size ease 200ms;
  }

  &:hover {
    &>* {
      background-size: 100% 0.1em;
    }
  }
`;

const CssAfter = css`
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scale(0, 1);
    transform-origin: left;
    transition: transform ease 200ms;
  }

  &:hover,
  &.active {
    &:after {
      transform: scale(1, 1);
    }
  }
`;

const variants: Variants = {
  default: css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-100);

  &:hover,
  &.active {
    color: var(--color-primary-600);
    border-color: var(--color-primary-200);
  }

  ${CssSvg}
`,
  alfa: css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  background: var(--color-primary-500);
  color: var(--color-neutral-100);
  border: 2px solid var(--color-primary-500);

  &:hover,
  &.active {
    background-color: var(--color-primary-600);
    color: var(--color-neutral-100);
    border-color: var(--color-primary-600);
  }

  ${CssSvg}
  ${CssFocus}
  ${CssActive}
  ${CssDisabled}
  ${CssResponsive}
`,
  beta: css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  background: var(--color-neutral-200);
  border: 2px solid var(--color-neutral-200);
  color: var(--color-neutral-700);

  &:hover,
  &.active {
    border-color: var(--color-neutral-400);
    color: var(--color-neutral-900);
  }

  ${CssSvg}
  ${CssFocus}
  ${CssActive}
  ${CssDisabled}
  ${CssResponsive}
`,
  gamma: css`
  position: relative;
  line-height: 1.5;
  color: var(--color-primary-400);

  &:hover,
  &.active {
    color: var(--color-primary-500);
  }

  ${CssAfter}
  ${CssSvg}
`,
  delta: css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  background: var(--color-secondary-500);
  color: var(--color-neutral-100);
  border: 2px solid var(--color-secondary-500);

  &:hover,
  &.active {
    background-color: var(--color-secondary-600);
    color: var(--color-neutral-100);
    border-color: var(--color-secondary-400);
  }
  `,
  epsilon: css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  color: var(--color-secondary-500);
  border: 2px solid var(--color-secondary-500);

  &:hover,
  &.active {
    color: var(--color-secondary-600);
    border-color: var(--color-secondary-400);
  }

  ${CssSvg}
  ${CssFocus}
  ${CssActive}
  ${CssDisabled}
  ${CssResponsive}
`,
  zeta: css`
  position: relative;
  line-height: 1.5;
  color: var(--color-secondary-500);

  &:hover,
  &.active {
    color: var(--color-secondary-600);
  }

  ${CssAfter}
  ${CssSvg}
`,
  eta: css`
  position: relative;
  line-height: 1.5;

  ${CssAfter}
  ${CssSvg}
  `,
  circle: css`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: var(--color-neutral-200);
  border: 2px solid var(--color-neutral-200);
  color: var(--color-neutral-700);

  &>span {
    font-size: 0;
  }

  &:hover,
  &.active {
    border-color: var(--color-neutral-400);
    color: var(--color-neutral-900);
  }

  ${CssSvg}
  ${CssFocus}
  ${CssActive}
  ${CssDisabled}
  ${CssResponsive}
`,
};

interface Props extends ComponentPropsWithRef<'button'> {
  variant?: Variant;
  size?: SizeVariant;
  // htmlType?: React.ButtonHTMLAttributes<any>['type']
  // onClick?: React.MouseEventHandler<HTMLButtonElement>
};

export type ButtonProps = ComponentCssResponsiveProps<Props, HTMLButtonElement>;

const StyledButton = styled.div<ButtonProps>`
  // display: inline-block;
  border: none;
  text-decoration: none;
  background: none;
  appearance: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
  font-size: 1em;
  line-height: 1;
  transition: ease 200ms;
  transition-property: background-color, color, border;
  cursor: pointer;

  ${props => getVariant(variants, props.variant)}
  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const className = useClasses('button', { disabled: props.disabled });
  return (<StyledButton ref={ref} className={className} as="button" {...props}>{props.children}</StyledButton>);
});

export default Button;
