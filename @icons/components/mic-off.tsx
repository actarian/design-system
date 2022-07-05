
import React from 'react';
import MicOff from '../icons/mic-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MicOff {...props} ref={ref} />);
});

// export default () => <MicOff />;
        