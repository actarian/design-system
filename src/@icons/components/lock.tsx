
import React from 'react';
import Lock from '../icons/lock.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Lock {...props} ref={ref} />);
});

// export default () => <Lock />;
        