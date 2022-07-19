import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { useBreakpoint } from '@hooks';
import styled from 'styled-components';

type Props = {
};

export type BreakpointProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledBreakpoint = styled.div<BreakpointProps>`
  position: fixed;
  right: 6px;
  bottom: 6px;
  padding: 0.3em 0.8em;
  background: var(--color-warning-500);
  color: var(--color-warning-900);
  border: 1px solid var(--color-warning-700);
  border-radius: 0.3em;
  z-index: 10000;
  ${props => getCssResponsive(props)}
`;

const Breakpoint = ((props: BreakpointProps) => {
  const breakpoint = useBreakpoint();
  return breakpoint.max > 0 ? (
    <StyledBreakpoint as='div' {...props}>{breakpoint.key} {breakpoint.min}-{breakpoint.max}</StyledBreakpoint>
  ) : null;
});

export default Breakpoint;
