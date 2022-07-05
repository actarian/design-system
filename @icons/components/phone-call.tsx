
import React from 'react';
import PhoneCall from '../icons/phone-call.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneCall {...props} ref={ref} />);
});

// export default () => <PhoneCall />;
        