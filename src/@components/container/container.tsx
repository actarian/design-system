import { ComponentCssResponsiveProps } from '@components/types';
import { getContainer, getCssResponsive } from '@components/utils';
import styled from 'styled-components';

type Props = {
  fluid?: boolean;
}

export type ContainerProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Container = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  ${props => getContainer(props, props.fluid)}
  ${props => getCssResponsive(props)}
`;

export const ContainerFluid = (props: ContainerProps) => (<Container fluid>{props.children}</Container>);

(Container as IContainer).Fluid = ContainerFluid;

export default Container as IContainer;

type IContainer = typeof Container & {
  Fluid: typeof ContainerFluid;
};
