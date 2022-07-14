
import React from 'react';
import PhoneOutgoing from '../icons/phone-outgoing.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneOutgoing {...props} ref={ref} />);
});

// export default () => <PhoneOutgoing />;
        