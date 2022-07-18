import { useWindowSize } from '@hooks/useWindowSize/useWindowSize';
import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Breakpoint {
  key: BreakpointType;
  min: number;
  max: number;
}

export function useBreakpoint(): Breakpoint {
  // todo
  const windowSize = useWindowSize();

  // const [breakpoint, setBreakpoint] = useState<Breakpoint>({ key: 'xs', min: 0, max: 0 });

  const theme = useContext(ThemeContext);
  const breakpoints: BreakpointType[] = Object.keys(theme.mediaQuery) as BreakpointType[];
  const values: number[] = Object.values(theme.mediaQuery);

  const breakpoint = useMemo(() => values.reduce((p, c, i) => {
    if (c < windowSize.width) {
      p.key = breakpoints[i];
      p.min = c;
      p.max = c;
    } else if (p.min === p.max) {
      p.max = c;
    }
    return p;
  }, { key: 'xs' as BreakpointType, min: 0, max: Number.POSITIVE_INFINITY }), [windowSize.width]);

  return breakpoint;
}
