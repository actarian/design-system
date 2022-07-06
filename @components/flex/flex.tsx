import { ComponentFlexAttrs } from '@components/types';
import { getFlex, getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';
import { FlexCol } from './flex-col';
import { FlexRow } from './flex-row';

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
  ${props => getFlex(props)}
`;

(Flex as IFlex).Row = FlexRow;
(Flex as IFlex).Col = FlexCol;

export default Flex as IFlex;

type Props = {
}

export type FlexProps = ComponentFlexAttrs<Props, HTMLDivElement>;

type IFlex = typeof Flex & {
  Row: typeof FlexRow;
  Col: typeof FlexCol;
};
