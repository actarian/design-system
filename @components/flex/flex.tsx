import { ComponentBoxAttrs, getMargin, getPadding } from '@components/types';
import styled from 'styled-components';

export const FlexContainer = styled.div<FlexProps>`
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  display: flex;
  flex-wrap: wrap;
`;

const Flex = styled.div<FlexProps>`
  display: flex;
`;

(Flex as IFlex).Container = FlexContainer;

export default Flex as IFlex;

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export type FlexProps = ComponentBoxAttrs<Props, HTMLDivElement>;

type IFlex = typeof Flex & {
  Container: typeof FlexContainer;
};
