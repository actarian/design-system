
import React from 'react';
import Mic from '../icons/mic.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Mic {...props} ref={ref} />);
});

// export default () => <Mic />;
        