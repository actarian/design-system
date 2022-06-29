import { css } from 'styled-components';
import { FlexAttrs, GridAttrs, MarginAttrs, PaddingAttrs, SizeAttrs } from './types';

export function setClass<T>(className: string) {
  return (props: T) => {
    const classNames: string[] = [className];
    if ((props as any).className != null) {
      classNames.unshift((props as any).className);
    }
    return ({ ...props, className: className_(...classNames) });
  }
}

export function getSize(props: SizeAttrs, defaultValue: SizeAttrs = {}) {
  props = { ...defaultValue, ...props };
  return css`
    ${(props.width) ? css`
      width: ${props.width};
    `: ''}
    ${props.maxWidth ? css`
      max-width: ${props.maxWidth};
    `: ''}
    ${props.minWidth ? css`
      min-width: ${props.minWidth};
    `: ''}
    ${props.height ? css`
      height: ${props.height};
    `: ''}
    ${props.maxHeight ? css`
      max-height: ${props.maxHeight};
    `: ''}
    ${props.minHeight ? css`
      min-height: ${props.minHeight};
    `: ''}
  `;
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

export function getFlex(props: FlexAttrs, defaultValue: FlexAttrs = {}) {
  props = { ...defaultValue, ...props };
  return css`
    ${(props.flexDirection) ? css`
      flex-direction: ${props.flexDirection};
    `: ''}
    ${props.justifyContent ? css`
      justify-content: ${props.justifyContent};
    `: ''}
    ${props.alignItems ? css`
      align-items: ${props.alignItems};
    `: ''}
  `;
}

export function getGrid(props: GridAttrs, defaultValue: GridAttrs = {}) {
  props = { ...defaultValue, ...props };
  return css`
    ${(props.columns) ? css`
      --grid-columns: ${props.columns};
    `: ''}
    ${(props.columnGap) ? css`
      --grid-column-gap: ${props.columnGap};
    `: ''}
    ${(props.rowGap) ? css`
      --grid-row-gap: ${props.rowGap};
    `: ''}
    ${(props.size) ? css`
      --grid-size: ${props.size};
    `: ''}
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), var(--grid-size));
    grid-column-gap: var(--grid-column-gap);
    grid-row-gap: var(--grid-row-gap);
  `;
}

function className_(...args: ({ [key: string]: boolean } | string)[]): string {
  return args.map(x => {
    return (typeof x === 'object') ? Object.keys(x).filter(key => x[key]).join(' ') : x.toString();
  }).join(' ');
}
