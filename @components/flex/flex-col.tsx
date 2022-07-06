import { ComponentCssResponsiveAttrs } from '@components/types';
import { getCssResponsive, getFlex, getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type FlexColProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

export const FlexCol = styled.div<FlexColProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  /*
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  ${props => getFlex(props)}
  */
  ${props => getCssResponsive(props)}
`;
