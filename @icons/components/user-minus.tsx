
import React from 'react';
import UserMinus from '../icons/user-minus.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UserMinus {...props} ref={ref} />);
});

// export default () => <UserMinus />;
        