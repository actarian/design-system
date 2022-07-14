
import React from 'react';
import UserPlus from '../icons/user-plus.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserPlus {...props} ref={ref} />);
});

// export default () => <UserPlus />;
        