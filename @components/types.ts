import React from 'react';

export type NativeAttrs<T extends HTMLElement, U> = Omit<React.HTMLAttributes<T>, keyof U>;

export type ThemeAttrs = {
  theme?: any;
};

export type SizeAttrs = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
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

export type FlexAttrs = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
};

export type GridAttrs = {
  columns?: string;
  size?: string;
  columnGap?: string;
  rowGap?: string;
};

export type BoxAttrs = PaddingAttrs & MarginAttrs & SizeAttrs;

export type NativeThemedAttrs<T, U extends HTMLElement> = NativeAttrs<U, T> & ThemeAttrs & T;

export type ComponentAttrs<T, U extends HTMLElement> = NativeThemedAttrs<T, U>;

export type ComponentBoxAttrs<T, U extends HTMLElement> = NativeThemedAttrs<T, U> & BoxAttrs;

export type ComponentFlexAttrs<T, U extends HTMLElement> = NativeThemedAttrs<T, U> & BoxAttrs & FlexAttrs;

export type ComponentGridAttrs<T, U extends HTMLElement> = NativeThemedAttrs<T, U> & BoxAttrs & GridAttrs;

export type Variant = 'alfa' | 'beta' | 'gamma' | 'delta' | 'epsilon' | 'zeta' | 'eta' | 'theta' | 'iota' | 'kappa' | 'lambda' | 'mu' | 'nu' | 'xi' | 'omicron' | 'pi' | 'rho' | 'sigma' | 'tau' | 'upsilon' | 'phi' | 'psi' | 'chi' | 'omega';

/*

export const tuple = <T extends string[]>(...args: T) => args

export const tupleNumber = <T extends number[]>(...args: T) => args

const buttonTypes = tuple('default', 'secondary', 'success', 'warning', 'error', 'abort', 'secondary-light', 'success-light', 'warning-light', 'error-light', )

const normalTypes = tuple('default', 'secondary', 'success', 'warning', 'error')

const snippetTypes = tuple('default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite')

const cardTypes = tuple('default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite', 'alert', 'purple', 'violet', 'cyan')

const copyTypes = tuple('default', 'silent', 'prevent')

const triggerTypes = tuple('hover', 'click')

const placement = tuple('top', 'topStart', 'topEnd', 'left', 'leftStart', 'leftEnd', 'bottom', 'bottomStart', 'bottomEnd', 'right', 'rightStart', 'rightEnd')

const dividerAlign = tuple('start', 'center', 'end', 'left', 'right')

export type ButtonTypes = typeof buttonTypes[number]

export type NormalTypes = typeof normalTypes[number]

export type SnippetTypes = typeof snippetTypes[number]

export type CardTypes = typeof cardTypes[number]

export type CopyTypes = typeof copyTypes[number]

export type TriggerTypes = typeof triggerTypes[number]

export type Placement = typeof placement[number]

export type DividerAlign = typeof dividerAlign[number]

*/
