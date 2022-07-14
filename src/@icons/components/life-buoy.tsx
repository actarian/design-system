
import React from 'react';
import LifeBuoy from '../icons/life-buoy.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LifeBuoy {...props} ref={ref} />);
});

// export default () => <LifeBuoy />;
        