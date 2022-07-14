
import React from 'react';
import Terminal from '../icons/terminal.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Terminal {...props} ref={ref} />);
});

// export default () => <Terminal />;
        