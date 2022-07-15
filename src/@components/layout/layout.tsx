import { Box } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
};

export type LayoutProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledLayout = styled(Box)`
`;

const Layout = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => (
  <StyledLayout ref={ref} as='div' {...props} />
));

export default Layout;
