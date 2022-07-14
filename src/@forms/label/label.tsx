import { Text } from '@components';
import { ComponentCssResponsiveAttrs } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
};

export type LabelProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const StyledLabel = styled(Text)`
  width: 100%;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Label = forwardRef<any, LabelProps>((props, ref) => (
  <StyledLabel ref={ref} as='label' type='h8' {...props} />
));

export default Label;
