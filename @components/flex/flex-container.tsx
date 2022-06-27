import { ComponentBoxAttrs, getMargin, getPadding } from '@components/types';
import styled from 'styled-components';

type Props = {
}

export type FlexContainerProps = ComponentBoxAttrs<Props, HTMLDivElement>;

export const FlexContainer = styled.div<FlexContainerProps>`
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: Min(1000px, calc(100vw - 80px));
`;
