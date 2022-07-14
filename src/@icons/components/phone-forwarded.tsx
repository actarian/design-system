
import React from 'react';
import PhoneForwarded from '../icons/phone-forwarded.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneForwarded {...props} ref={ref} />);
});

// export default () => <PhoneForwarded />;
        