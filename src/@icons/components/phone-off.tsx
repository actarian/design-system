
import React from 'react';
import PhoneOffSvg from '../icons/phone-off.svg';

const PhoneOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneOffSvg {...props} ref={ref} />);
});

PhoneOff.displayName = 'PhoneOff';

export default PhoneOff;

// export default () => <PhoneOff />;
        