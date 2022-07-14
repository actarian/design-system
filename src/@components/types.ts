import React from 'react';
import { FlattenInterpolation } from 'styled-components';
import { CssResponsiveAttrs } from './css';

export type ThemeAttrs = {
  theme?: any;
  className?: string;
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

export type NativeElement = Element;

export type NativeAttrs<T extends NativeElement, U> = Omit<React.HTMLAttributes<T>, keyof U> & { as?: React.ElementType, children?: React.ReactNode };

export type NativeThemedAttrs<T, U extends NativeElement> = NativeAttrs<U, T> & ThemeAttrs & T;

export type ComponentAttrs<T, U extends NativeElement> = NativeThemedAttrs<T, U>;

export type ComponentCssResponsiveAttrs<T, U extends NativeElement> = NativeThemedAttrs<T, U> & CssResponsiveAttrs;

export type ComponentGridAttrs<T, U extends NativeElement> = NativeThemedAttrs<T, U> & GridAttrs;

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
