
import React from 'react';
import LogInSvg from '../icons/log-in.svg';

const LogIn = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LogInSvg {...props} ref={ref} />);
});

LogIn.displayName = 'LogIn';

export default LogIn;

// export default () => <LogIn />;
        