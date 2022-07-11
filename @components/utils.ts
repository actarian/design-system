import { css, FlattenInterpolation } from 'styled-components';
import { CssMap, CssResponsiveAttrs } from './css';
import { DisplayAttrs, FlexAttrs, GridAttrs, MarginAttrs, PaddingAttrs, SizeAttrs, ThemeAttrs, Variant } from './types';

export function setClass<T>(className: string) {
  return (props: T) => {
    const classNames: string[] = [className];
    if ((props as any).className != null) {
      classNames.unshift((props as any).className);
    }
    return ({ ...props, className: className_(...classNames) });
  }
}

export function getContainer(props: ThemeAttrs, fluid?: boolean) {
  if (fluid) {
    return `
    max-width: calc(100% - var(--grid-column-gap) * 2);
  `;
  } else {
    const theme = props.theme;
    if (theme.maxWidth && theme.mediaQuery) {
      return Object.keys(theme.mediaQuery).map(key => {
        const value = theme.mediaQuery[key];
        return `
@media(min-width: ${value}px) {
  max-width: ${theme.maxWidth[key]};
}
`
      }).join('\n');
    } else {
      return '';
    }
  }
}

export function getCssResponsive(props: CssResponsiveAttrs & ThemeAttrs, defaultValue: CssResponsiveAttrs = {}) {
  props = { ...defaultValue, ...props };
  let rules = '';
  for (const [key, value] of Object.entries(props)) {
    // console.log(`${key}: ${value}`);
    const rule = key.replace(/(.+?)(Sm|Md|Lg|Xl)?$/, function (m, g1, g2) {
      const prop: any = g1;
      if (CssMap.has(prop)) {
        // console.log('prop', prop);
        const rule = `${CssMap.get(prop)}: ${value};`;
        if (g2) {
          const size: any = g2.toLowerCase();
          // console.log('size', size, 'rule', rule);
          return `@media(min-width: ${props.theme.mediaQuery[size]}px) {
              ${rule}
            }`;
        } else {
          // console.log('rule', rule);
          return rule;
        }
      } else {
        return '';
      }
    });
    rules += rule + '\n';
  }
  return rules;
}

const displayMap = new Map([
  ['display', 'display'],
  ['position', 'position'],
  ['order', 'order'],
  ['zIndex', 'z-index'],
]);

export function getDisplay(props: DisplayAttrs & ThemeAttrs, defaultValue: DisplayAttrs = {}) {
  props = { ...defaultValue, ...props };
  const css = Object.keys(props).map(key => {
    const value = (props as any)[key];
    const rule = key.replace(/(.+?)(Sm|Md|Lg|Xl)?$/, function (m, g1, g2) {
      const prop: any = g1;
      if (displayMap.has(prop)) {
        // console.log('prop', prop);
        const rule = `${(displayMap as any).get(prop)}: ${value};`;
        if (g2) {
          const size: any = g2.toLowerCase();
          // console.log('size', size, 'rule', rule);
          return `@media(min-width: ${props.theme.mediaQuery[size]}px) {
              ${rule}
            }`;
        } else {
          // console.log('rule', rule);
          return rule;
        }
      } else {
        return '';
      }
    });
    return rule;
  }).join('\n');
  return css;
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
    ${(props.flex) ? css`
      flex: ${props.flex};
    `: ''}
    ${(props.flexDirection) ? css`
      flex-direction: ${props.flexDirection};
    `: ''}
    ${props.justifyContent ? css`
      justify-content: ${props.justifyContent};
    `: ''}
    ${props.alignItems ? css`
      align-items: ${props.alignItems};
    `: ''}
    ${props.gap ? css`
      gap: ${props.gap};
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

export function getVariant(variants: { [key in Variant]?: FlattenInterpolation<any> }, type?: Variant) {
  return (type && variants[type]) ? variants[type] : '';
}

function className_(...args: ({ [key: string]: boolean } | string)[]): string {
  return args.map(x => {
    return (typeof x === 'object') ? Object.keys(x).filter(key => x[key]).join(' ') : x.toString();
  }).join(' ');
}

export const className = className_;

export function isChildElement(parent: Element | null | undefined, child: Element | null | undefined): boolean {
  if (!parent || !child) {
    return false;
  }
  let node: (Node & ParentNode) | null = child;
  while (node) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
