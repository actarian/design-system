import { ComponentBoxAttrs } from '@components/types';
import styled from 'styled-components';
import { FlexContainer } from './flex-container';

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
