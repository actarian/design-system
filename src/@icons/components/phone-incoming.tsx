
import React from 'react';
import PhoneIncomingSvg from '../icons/phone-incoming.svg';

const PhoneIncoming = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneIncomingSvg {...props} ref={ref} />);
});

PhoneIncoming.displayName = 'PhoneIncoming';

export default PhoneIncoming;

// export default () => <PhoneIncoming />;
        