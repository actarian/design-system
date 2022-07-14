
import React from 'react';
import Sun from '../icons/sun.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Sun {...props} ref={ref} />);
});

// export default () => <Sun />;
        