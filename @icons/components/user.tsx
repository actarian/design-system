
import React from 'react';
import User from '../icons/user.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<User {...props} ref={ref} />);
});

// export default () => <User />;
        