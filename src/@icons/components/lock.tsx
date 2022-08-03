
import React from 'react';
import LockSvg from '../icons/lock.svg';

const Lock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LockSvg {...props} ref={ref} />);
});

Lock.displayName = 'Lock';

export default Lock;

// export default () => <Lock />;
        