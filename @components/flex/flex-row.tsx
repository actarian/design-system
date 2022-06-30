import { ComponentFlexAttrs } from '@components/types';
import { getFlex, getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type FlexRowProps = ComponentFlexAttrs<Props, HTMLDivElement>;

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  ${props => getFlex(props)}
`;
