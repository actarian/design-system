
import React from 'react';
import UserMinusSvg from '../icons/user-minus.svg';

const UserMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserMinusSvg {...props} ref={ref} />);
});

UserMinus.displayName = 'UserMinus';

export default UserMinus;

// export default () => <UserMinus />;
        