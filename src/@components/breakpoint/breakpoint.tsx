import { Box } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import { useBreakpoint } from '@hooks';
import styled from 'styled-components';

type Props = {
};

export type BreakpointProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledBreakpoint = styled(Box)`
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  padding: 0.3em 0.8em;
  background: var(--color-warning-500);
  color: var(--color-warning-900);
  border: 1px solid var(--color-warning-700);
  border-radius: 0.3em;
  z-index: 10000;
`;

const Breakpoint = ((props: BreakpointProps) => {
  const breakpoint = useBreakpoint();
  return (
    <StyledBreakpoint as='div' {...props}>{breakpoint.key} {breakpoint.min}-{breakpoint.max}</StyledBreakpoint>
  );
});

export default Breakpoint;
