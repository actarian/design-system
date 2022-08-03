
import React from 'react';
import UserSvg from '../icons/user.svg';

const User = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserSvg {...props} ref={ref} />);
});

User.displayName = 'User';

export default User;

// export default () => <User />;
        