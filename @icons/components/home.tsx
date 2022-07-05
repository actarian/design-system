
import React from 'react';
import Home from '../icons/home.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Home {...props} ref={ref} />);
});

// export default () => <Home />;
        