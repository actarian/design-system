
import React from 'react';
import Moon from '../icons/moon.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Moon {...props} ref={ref} />);
});

// export default () => <Moon />;
        