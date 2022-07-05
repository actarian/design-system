
import React from 'react';
import PhoneOff from '../icons/phone-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneOff {...props} ref={ref} />);
});

// export default () => <PhoneOff />;
        