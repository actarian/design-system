
import React from 'react';
import Watch from '../icons/watch.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Watch {...props} ref={ref} />);
});

// export default () => <Watch />;
        