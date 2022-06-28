import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type FlexContainerProps = ComponentBoxAttrs<Props, HTMLDivElement>;

export const FlexContainer = styled.div<FlexContainerProps>`
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
`;
