import React from 'react';
import { FlattenInterpolation } from 'styled-components';

export type ThemeAttrs = {
  theme?: any;
  className?: string;
};

export type BaseAttrs = {
  // display
  di?: string;
  diSm?: string;
  diMd?: string;
  diLg?: string;
  diXl?: string;

  // position
  po?: string;
  poSm?: string;
  poMd?: string;
  poLg?: string;
  poXl?: string;

  // width
  w?: string;
  wSm?: string;
  wMd?: string;
  wLg?: string;
  wXl?: string;

  // minWidth
  miw?: string;
  miwSm?: string;
  miwMd?: string;
  miwLg?: string;
  miwXl?: string;

  // maxWidth
  maw?: string;
  mawSm?: string;
  mawMd?: string;
  mawLg?: string;
  mawXl?: string;

  // height
  h?: string;
  hSm?: string;
  hMd?: string;
  hLg?: string;
  hXl?: string;

  // minHeight
  mih?: string;
  mihSm?: string;
  mihMd?: string;
  mihLg?: string;
  mihXl?: string;

  // maxHeight
  mah?: string;
  mahSm?: string;
  mahMd?: string;
  mahLg?: string;
  mahXl?: string;

  // top
  to?: string;
  toSm?: string;
  toMd?: string;
  toLg?: string;
  toXl?: string;

  // right
  ri?: string;
  riSm?: string;
  riMd?: string;
  riLg?: string;
  riXl?: string;

  // bottom
  bo?: string;
  boSm?: string;
  boMd?: string;
  boLg?: string;
  boXl?: string;

  // left
  le?: string;
  leSm?: string;
  leMd?: string;
  leLg?: string;
  leXl?: string;

  // padding
  p?: string;
  pSm?: string;
  pMd?: string;
  pLg?: string;
  pXl?: string;

  pt?: string;
  ptSm?: string;
  ptMd?: string;
  ptLg?: string;
  ptXl?: string;

  pr?: string;
  prSm?: string;
  prMd?: string;
  prLg?: string;
  prXl?: string;

  pb?: string;
  pbSm?: string;
  pbMd?: string;
  pbLg?: string;
  pbXl?: string;

  pl?: string;
  plSm?: string;
  plMd?: string;
  plLg?: string;
  plXl?: string;

  // margin
  m?: string;
  mSm?: string;
  mMd?: string;
  mLg?: string;
  mXl?: string;

  mt?: string;
  mtSm?: string;
  mtMd?: string;
  mtLg?: string;
  mtXl?: string;

  mr?: string;
  mrSm?: string;
  mrMd?: string;
  mrLg?: string;
  mrXl?: string;

  mb?: string;
  mbSm?: string;
  mbMd?: string;
  mbLg?: string;
  mbXl?: string;

  ml?: string;
  mlSm?: string;
  mlMd?: string;
  mlLg?: string;
  mlXl?: string;

  // border
  b?: string;
  bSm?: string;
  bMd?: string;
  bLg?: string;
  bXl?: string;

  bt?: string;
  btSm?: string;
  btMd?: string;
  btLg?: string;
  btXl?: string;

  br?: string;
  brSm?: string;
  brMd?: string;
  brLg?: string;
  brXl?: string;

  bb?: string;
  bbSm?: string;
  bbMd?: string;
  bbLg?: string;
  bbXl?: string;

  bl?: string;
  blSm?: string;
  blMd?: string;
  blLg?: string;
  blXl?: string;
};

export type DisplayAttrs = {
  display?: string;
  displaySm?: string;
  displayMd?: string;
  displayLg?: string;
  displayXl?: string;

  position?: string;
  positionSm?: string;
  positionMd?: string;
  positionLg?: string;
  positionXl?: string;

  zIndex?: string;

  order?: string;
  orderSm?: string;
  orderMd?: string;
  orderLg?: string;
  orderXl?: string;
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
  flex?: string;
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

// Polymorphic
export type PropsOf<E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;
export interface PolymorphicElementOwnProps<E extends React.ElementType = React.ElementType> { as?: E; }
export type PolymorphicElementProps<E extends React.ElementType> = PolymorphicElementOwnProps<E> & Omit<PropsOf<E>, keyof PolymorphicElementOwnProps>;
export type PolymorphicProps<E extends React.ElementType, P> = P & PolymorphicElementProps<E>;
// Polymorphic

export type BoxAttrs = DisplayAttrs & SizeAttrs & MarginAttrs & PaddingAttrs;

export type NativeElement = Element;

export type NativeAttrs<T extends NativeElement, U> = Omit<React.HTMLAttributes<T>, keyof U> & { as?: React.ElementType };

export type NativeThemedAttrs<T, U extends NativeElement> = NativeAttrs<U, T> & ThemeAttrs & T;

export type ComponentAttrs<T, U extends NativeElement> = NativeThemedAttrs<T, U>;

export type ComponentBaseAttrs<T, U extends NativeElement> = NativeThemedAttrs<T, U> & BaseAttrs;

export type ComponentBoxAttrs<T, U extends NativeElement> = NativeThemedAttrs<T, U> & BoxAttrs;

export type ComponentFlexAttrs<T, U extends NativeElement> = NativeThemedAttrs<T, U> & BoxAttrs & FlexAttrs;

export type ComponentGridAttrs<T, U extends NativeElement> = NativeThemedAttrs<T, U> & BoxAttrs & GridAttrs;

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
