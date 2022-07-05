
import React from 'react';
import UserCheck from '../icons/user-check.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserCheck {...props} ref={ref} />);
});

// export default () => <UserCheck />;
        