import React from 'react';
import { FlattenInterpolation } from 'styled-components';

export type NativeAttrs<T extends HTMLElement, U> = Omit<React.HTMLAttributes<T>, keyof U>;

export type ThemeAttrs = {
  theme?: any;
  className?: string;
};

export type BaseAttrs = {
  // display
  'di'?: string;
  'di:sm'?: string;
  'di:md'?: string;
  'di:lg'?: string;
  'di:xl'?: string;

  // position
  'po'?: string;
  'po:sm'?: string;
  'po:md'?: string;
  'po:lg'?: string;
  'po:xl'?: string;

  // width
  'w'?: string;
  'w:sm'?: string;
  'w:md'?: string;
  'w:lg'?: string;
  'w:xl'?: string;

  // minWidth

  // maxWidth

  // height
  'h'?: string;
  'h:sm'?: string;
  'h:md'?: string;
  'h:lg'?: string;
  'h:xl'?: string;

  // minHeight

  // maxHeight

  // top
  // right
  // bottom
  // left

  // padding
  'p'?: string;
  'p:sm'?: string;
  'p:md'?: string;
  'p:lg'?: string;
  'p:xl'?: string;

  'pt'?: string;
  'pt:sm'?: string;
  'pt:md'?: string;
  'pt:lg'?: string;
  'pt:xl'?: string;

  'pr'?: string;
  'pr:sm'?: string;
  'pr:md'?: string;
  'pr:lg'?: string;
  'pr:xl'?: string;

  'pb'?: string;
  'pb:sm'?: string;
  'pb:md'?: string;
  'pb:lg'?: string;
  'pb:xl'?: string;

  'pl'?: string;
  'pl:sm'?: string;
  'pl:md'?: string;
  'pl:lg'?: string;
  'pl:xl'?: string;

  // margin
  'm'?: string;
  'm:sm'?: string;
  'm:md'?: string;
  'm:lg'?: string;
  'm:xl'?: string;

  'mt'?: string;
  'mt:sm'?: string;
  'mt:md'?: string;
  'mt:lg'?: string;
  'mt:xl'?: string;

  'mr'?: string;
  'mr:sm'?: string;
  'mr:md'?: string;
  'mr:lg'?: string;
  'mr:xl'?: string;

  'mb'?: string;
  'mb:sm'?: string;
  'mb:md'?: string;
  'mb:lg'?: string;
  'mb:xl'?: string;

  'ml'?: string;
  'ml:sm'?: string;
  'ml:md'?: string;
  'ml:lg'?: string;
  'ml:xl'?: string;
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
  gap?: string;
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

export type ComponentBaseAttrs<T, U extends HTMLElement> = NativeThemedAttrs<T, U> & BaseAttrs;

export type ComponentBoxAttrs<T, U extends HTMLElement> = NativeThemedAttrs<T, U> & BoxAttrs;

export type ComponentFlexAttrs<T, U extends HTMLElement> = NativeThemedAttrs<T, U> & BoxAttrs & FlexAttrs;

export type ComponentGridAttrs<T, U extends HTMLElement> = NativeThemedAttrs<T, U> & BoxAttrs & GridAttrs;

export type Variant = 'default' | 'alfa' | 'beta' | 'gamma' | 'delta' | 'epsilon' | 'zeta' | 'eta' | 'theta' | 'iota' | 'kappa' | 'lambda' | 'mu' | 'nu' | 'xi' | 'omicron' | 'pi' | 'rho' | 'sigma' | 'tau' | 'upsilon' | 'phi' | 'psi' | 'chi' | 'omega';

export type Variants = { [key in Variant]?: FlattenInterpolation<any> };

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
