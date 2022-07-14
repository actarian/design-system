import { Box } from '@components';
import { ComponentCssResponsiveAttrs } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
};

export type FieldProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const StyledField = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

const Field = forwardRef<any, FieldProps>((props, ref) => (
  <StyledField ref={ref} as='div' {...props} />
));

export default Field;
