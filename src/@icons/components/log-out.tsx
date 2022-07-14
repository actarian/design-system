
import React from 'react';
import LogOut from '../icons/log-out.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LogOut {...props} ref={ref} />);
});

// export default () => <LogOut />;
        