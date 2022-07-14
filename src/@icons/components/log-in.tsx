
import React from 'react';
import LogIn from '../icons/log-in.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LogIn {...props} ref={ref} />);
});

// export default () => <LogIn />;
        