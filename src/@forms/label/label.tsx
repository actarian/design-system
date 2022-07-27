import { Text } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { useClasses } from '@hooks';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
};

export type LabelProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledLabel = styled(Text)`
  display: flex;
  align-items: center;
  width: 100%;
  // font-size: 0.9em;
  // font-weight: 600;
  margin-bottom: 0.5rem;

  ${props => getCssResponsive(props)}
`;

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  const classNames = useClasses('label', className);
  return (
    <StyledLabel ref={ref} className={classNames} as='label' type='h8' {...props} />
  );
});

export default Label;
