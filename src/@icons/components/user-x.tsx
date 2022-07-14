
import React from 'react';
import UserX from '../icons/user-x.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserX {...props} ref={ref} />);
});

// export default () => <UserX />;
        