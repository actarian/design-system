
import React from 'react';
import BellSvg from '../icons/bell.svg';

const Bell = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BellSvg {...props} ref={ref} />);
});

Bell.displayName = 'Bell';

export default Bell;

// export default () => <Bell />;
        