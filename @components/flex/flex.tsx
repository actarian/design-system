import { ComponentFlexAttrs } from '@components/types';
import { getFlex, getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';
import { FlexContainer } from './flex-container';

const Flex = styled.div<FlexProps>`
  display: flex;
  ${props => getSize(props)}
  ${props => getMargin(props, { margin: '8px' })}
  ${props => getPadding(props)}
  ${props => getFlex(props)}
`;

(Flex as IFlex).Container = FlexContainer;

export default Flex as IFlex;

type Props = {
}

export type FlexProps = ComponentFlexAttrs<Props, HTMLDivElement>;

type IFlex = typeof Flex & {
  Container: typeof FlexContainer;
};
