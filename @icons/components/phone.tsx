
import React from 'react';
import Phone from '../icons/phone.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Phone {...props} ref={ref} />);
});

// export default () => <Phone />;
        