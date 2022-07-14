
import React from 'react';
import PhoneIncoming from '../icons/phone-incoming.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneIncoming {...props} ref={ref} />);
});

// export default () => <PhoneIncoming />;
        