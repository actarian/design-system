
import React from 'react';
import Disc from '../icons/disc.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Disc {...props} ref={ref} />);
});

// export default () => <Disc />;
        