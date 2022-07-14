import { Box } from '@components';
import { ComponentCssResponsiveAttrs } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
};

export type LayoutProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const StyledLayout = styled(Box)`
`;

const Layout = forwardRef<any, LayoutProps>((props, ref) => (
  <StyledLayout ref={ref} as='div' {...props} />
));

export default Layout;
