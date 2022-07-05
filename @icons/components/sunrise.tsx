
import React from 'react';
import Sunrise from '../icons/sunrise.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Sunrise {...props} ref={ref} />);
});

// export default () => <Sunrise />;
        