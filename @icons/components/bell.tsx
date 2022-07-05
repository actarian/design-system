
import React from 'react';
import Bell from '../icons/bell.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Bell {...props} ref={ref} />);
});

// export default () => <Bell />;
        