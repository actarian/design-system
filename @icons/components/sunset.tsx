
import React from 'react';
import Sunset from '../icons/sunset.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Sunset {...props} ref={ref} />);
});

// export default () => <Sunset />;
        