import { ComponentFlexAttrs } from '@components/types';
import { getFlex, getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type FlexContainerProps = ComponentFlexAttrs<Props, HTMLDivElement>;

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  ${props => getFlex(props)}
`;
