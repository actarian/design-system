
import React from 'react';
import LogOutSvg from '../icons/log-out.svg';

const LogOut = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LogOutSvg {...props} ref={ref} />);
});

LogOut.displayName = 'LogOut';

export default LogOut;

// export default () => <LogOut />;
        