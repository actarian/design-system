
import React from 'react';
import EyeOff from '../icons/eye-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EyeOff {...props} ref={ref} />);
});

// export default () => <EyeOff />;
        