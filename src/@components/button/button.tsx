import { ComponentCssResponsiveProps, SizeVariant, Variant, Variants } from '@components/types';
import { getCssResponsive, getVariant } from '@components/utils';
import React from 'react';
import styled, { css } from 'styled-components';

const CssSvg = css`
  svg {
    width: 1em;
    height: 1em;
    margin: 0 0.3em;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
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

  &:hover {
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

  &:hover {
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

  &:hover {
    background-color: var(--color-primary-600);
    color: var(--color-neutral-100);
    border-color: var(--color-primary-600);
  }

  ${CssSvg}
`,
  beta: css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  background: var(--color-primary-100);
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-100);

  &:hover {
    color: var(--color-primary-600);
    border-color: var(--color-primary-200);
  }

  ${CssSvg}
`,
  gamma: css`
  position: relative;
  line-height: 1.5;
  color: var(--color-primary-400);

  &:hover {
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

  &:hover {
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

  &:hover {
    color: var(--color-secondary-600);
    border-color: var(--color-secondary-400);
  }

  ${CssSvg}
`,
  zeta: css`
  position: relative;
  line-height: 1.5;
  color: var(--color-secondary-500);

  &:hover {
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
};

type Props = {
  type?: Variant;
  size?: SizeVariant;
  // htmlType?: React.ButtonHTMLAttributes<any>['type']
  // onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type ButtonProps = ComponentCssResponsiveProps<Props, Element>;

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
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

  ${props => getVariant(variants, props.type)}
  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`;

const Button = React.forwardRef<Element, ButtonProps>((props: ButtonProps, ref?: React.Ref<Element>) => {
  return (<StyledButton {...props} ref={ref}>{props.children}</StyledButton>);
});

export default Button;
