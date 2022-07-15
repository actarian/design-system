import { ComponentCssResponsiveProps, Variant, Variants } from '@components/types';
import { getCssResponsive, getVariant } from '@components/utils';
import styled, { css } from 'styled-components';

const variants: Variants = {
  default: css`
`,
  alfa: css`
`,
  beta: css`
`,
  gamma: css`
`,
  delta: css`
`
};

type Props = {
  type?: Variant;
}

export type DividerProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const DividerContainer = styled.div<DividerProps>`
  position: relative;
  height: 1px;
  max-width: 100%;
  background-color: var(--color-neutral-300);
  ${props => getVariant(variants, props.type)}
  ${props => getCssResponsive(props, { margin: props.children ? '1rem 0' : '0.5rem 0' })}
`;

const DividerTitle = styled.span<DividerProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -2px;
  min-height: 100%;
  display: inline-flex;
  align-items: center;
  transform: translate(-50%, -50%);
  padding: 0 0.75em;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-900);
  z-index: 1;
`;

const Divider = (props: DividerProps) => {
  return (
    <DividerContainer {...props}>
      {props.children && <DividerTitle {...props}>{props.children}</DividerTitle>}
    </DividerContainer>
  )
};

export default Divider;
