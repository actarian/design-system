
import React from 'react';
import Package from '../icons/package.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Package {...props} ref={ref} />);
});

// export default () => <Package />;
        