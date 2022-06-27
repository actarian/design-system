import React from 'react';
import { css } from 'styled-components';

export type NativeAttrs<T extends HTMLElement, U> = Omit<React.HTMLAttributes<T>, keyof U>;

export type ThemeAttrs = {
  theme?: any;
};

export type PaddingAttrs = {
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
};

export type MarginAttrs = {
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
};

export type BoxAttrs = PaddingAttrs & MarginAttrs;

export type ComponentAttrs<T, U extends HTMLElement> = T & ThemeAttrs & NativeAttrs<U, T>;

export type ComponentBoxAttrs<T, U extends HTMLElement> = T & ThemeAttrs & BoxAttrs & NativeAttrs<U, T>;

export type Variant = 'alfa' | 'beta' | 'gamma' | 'delta' | 'epsilon' | 'zeta' | 'eta' | 'theta' | 'iota' | 'kappa' | 'lambda' | 'mu' | 'nu' | 'xi' | 'omicron' | 'pi' | 'rho' | 'sigma' | 'tau' | 'upsilon' | 'phi' | 'psi' | 'chi' | 'omega';

/*
export function getStyled<T>(tagName: keyof StyledInterface, className: string) {
  return (styled[tagName] as ThemedStyledFunction<typeof tagName, any, {}, never>).attrs(setClass<T>(className));
}
*/

function className_(...args: ({ [key: string]: boolean } | string)[]): string {
  return args.map(x => (
    typeof x === 'object' ?
      Object.keys(x).filter(key => x[key]).join(' ') :
      x.toString()
  )).join(' ');
}

export function setClass<T>(className: string) {
  return (props: T) => {
    const classNames = [className];
    if ((props as any).className != null) {
      classNames.unshift((props as any).className);
    }
    return ({ ...props, className: className_(...classNames) });
  }
}

export function getMargin(props: MarginAttrs, defaultValue: MarginAttrs = {}) {
  props = { ...defaultValue, ...props };
  /*
  const keys = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft'] as (keyof MarginAttrs)[];
  const defaultMargin = keys.reduce((p: string | undefined, c: keyof MarginAttrs) => {
    return props[c] ? undefined : p;
  }, defaultValue);
  */
  return css`
    ${(props.margin) ? css`
      margin: ${props.margin};
    `: ''}
    ${props.marginTop ? css`
      margin-top: ${props.marginTop};
    `: ''}
    ${props.marginRight ? css`
      margin-right: ${props.marginRight};
    `: ''}
    ${props.marginBottom ? css`
      margin-bottom: ${props.marginBottom};
    `: ''}
    ${props.marginLeft ? css`
      margin-left: ${props.marginLeft};
    `: ''}
  `;
}

export function getPadding(props: PaddingAttrs, defaultValue: PaddingAttrs = {}) {
  props = { ...defaultValue, ...props };
  /*
  const keys = ['padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'] as (keyof PaddingAttrs)[];
  const defaultPadding = keys.reduce((p: string | undefined, c: keyof PaddingAttrs) => {
    return props[c] ? undefined : p;
  }, defaultValue);
  */
  return css`
    ${(props.padding) ? css`
      padding: ${props.padding};
    `: ''}
    ${props.paddingTop ? css`
      padding-top: ${props.paddingTop};
    `: ''}
    ${props.paddingRight ? css`
      padding-right: ${props.paddingRight};
    `: ''}
    ${props.paddingBottom ? css`
      padding-bottom: ${props.paddingBottom};
    `: ''}
    ${props.paddingLeft ? css`
      padding-left: ${props.paddingLeft};
    `: ''}
  `;
}










export const tuple = <T extends string[]>(...args: T) => args

export const tupleNumber = <T extends number[]>(...args: T) => args

const buttonTypes = tuple(
  'default',
  'secondary',
  'success',
  'warning',
  'error',
  'abort',
  'secondary-light',
  'success-light',
  'warning-light',
  'error-light',
)

const normalTypes = tuple('default', 'secondary', 'success', 'warning', 'error')

const snippetTypes = tuple(
  'default',
  'secondary',
  'success',
  'warning',
  'error',
  'dark',
  'lite',
)

const cardTypes = tuple(
  'default',
  'secondary',
  'success',
  'warning',
  'error',
  'dark',
  'lite',
  'alert',
  'purple',
  'violet',
  'cyan',
)

const copyTypes = tuple('default', 'silent', 'prevent')

const triggerTypes = tuple('hover', 'click')

const placement = tuple(
  'top',
  'topStart',
  'topEnd',
  'left',
  'leftStart',
  'leftEnd',
  'bottom',
  'bottomStart',
  'bottomEnd',
  'right',
  'rightStart',
  'rightEnd',
)

const dividerAlign = tuple('start', 'center', 'end', 'left', 'right')

export type ButtonTypes = typeof buttonTypes[number]

export type NormalTypes = typeof normalTypes[number]

export type SnippetTypes = typeof snippetTypes[number]

export type CardTypes = typeof cardTypes[number]

export type CopyTypes = typeof copyTypes[number]

export type TriggerTypes = typeof triggerTypes[number]

export type Placement = typeof placement[number]

export type DividerAlign = typeof dividerAlign[number]
