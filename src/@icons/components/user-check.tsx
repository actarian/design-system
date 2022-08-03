
import React from 'react';
import UserCheckSvg from '../icons/user-check.svg';

const UserCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserCheckSvg {...props} ref={ref} />);
});

UserCheck.displayName = 'UserCheck';

export default UserCheck;

// export default () => <UserCheck />;
        