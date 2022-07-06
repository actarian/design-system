import { ComponentCssResponsiveAttrs } from '@components/types';
import { getCssResponsive, getFlex, getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type FlexRowProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  gap: 0.5rem;
  /*
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  ${props => getFlex(props)}
  */
  ${props => getCssResponsive(props)}
`;
