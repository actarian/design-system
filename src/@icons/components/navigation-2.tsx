
import React from 'react';
import Navigation2 from '../icons/navigation-2.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Navigation2 {...props} ref={ref} />);
});

// export default () => <Navigation2 />;
        