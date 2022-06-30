import { ComponentBoxAttrs } from '@components/types';
import { getContainer, getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
  fluid?: boolean;
}

export type ContainerProps = ComponentBoxAttrs<Props, HTMLDivElement>;

const Container = styled.div<ContainerProps>`
  ${props => getContainer(props, props.fluid)}
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
`;

export default Container;

