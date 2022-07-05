
import React from 'react';
import CloudOff from '../icons/cloud-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudOff {...props} ref={ref} />);
});

// export default () => <CloudOff />;
        