import { Text } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
};

export type LabelProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledLabel = styled(Text)`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => (
  <StyledLabel ref={ref} as='label' type='h8' {...props} />
));

export default Label;
