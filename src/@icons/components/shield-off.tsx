
import React from 'react';
import ShieldOff from '../icons/shield-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShieldOff {...props} ref={ref} />);
});

// export default () => <ShieldOff />;
        