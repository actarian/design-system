
import React from 'react';
import CloudSnow from '../icons/cloud-snow.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudSnow {...props} ref={ref} />);
});

// export default () => <CloudSnow />;
        