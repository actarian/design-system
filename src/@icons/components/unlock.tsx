
import React from 'react';
import UnlockSvg from '../icons/unlock.svg';

const Unlock = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UnlockSvg {...props} ref={ref} />);
});

Unlock.displayName = 'Unlock';

export default Unlock;

// export default () => <Unlock />;
        