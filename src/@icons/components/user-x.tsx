
import React from 'react';
import UserXSvg from '../icons/user-x.svg';

const UserX = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserXSvg {...props} ref={ref} />);
});

UserX.displayName = 'UserX';

export default UserX;

// export default () => <UserX />;
        