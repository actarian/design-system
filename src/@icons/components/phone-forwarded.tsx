
import React from 'react';
import PhoneForwardedSvg from '../icons/phone-forwarded.svg';

const PhoneForwarded = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneForwardedSvg {...props} ref={ref} />);
});

PhoneForwarded.displayName = 'PhoneForwarded';

export default PhoneForwarded;

// export default () => <PhoneForwarded />;
        