
import React from 'react';
import Users from '../icons/users.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Users {...props} ref={ref} />);
});

// export default () => <Users />;
        