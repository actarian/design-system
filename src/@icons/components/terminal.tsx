
import React from 'react';
import TerminalSvg from '../icons/terminal.svg';

const Terminal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TerminalSvg {...props} ref={ref} />);
});

Terminal.displayName = 'Terminal';

export default Terminal;

// export default () => <Terminal />;
        