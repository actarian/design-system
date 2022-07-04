import { ComponentFlexAttrs } from '@components/types';
import { getFlex, getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type CardContentProps = ComponentFlexAttrs<Props, HTMLDivElement>;

export const CardContent = styled.div<CardContentProps>`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  ${props => getFlex(props)}
`;
