import { Box } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
};

export type ListProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledList = styled(Box)`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-neutral-200);
`;

const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => (
  <StyledList ref={ref} as='div' {...props} />
));

export default List;
