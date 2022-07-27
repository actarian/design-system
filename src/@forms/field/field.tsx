import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
};

export type FieldProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledField = styled.div<FieldProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  label {
    font-weight: 500;
  }

  ${props => getCssResponsive(props)}
`;

const Field = forwardRef<HTMLDivElement, FieldProps>((props, ref) => (
  <StyledField ref={ref} as='div' {...props} />
));

export default Field;
