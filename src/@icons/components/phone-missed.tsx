
import React from 'react';
import PhoneMissed from '../icons/phone-missed.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PhoneMissed {...props} ref={ref} />);
});

// export default () => <PhoneMissed />;
        