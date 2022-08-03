
import React from 'react';
import SunSvg from '../icons/sun.svg';

const Sun = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SunSvg {...props} ref={ref} />);
});

Sun.displayName = 'Sun';

export default Sun;

// export default () => <Sun />;
        