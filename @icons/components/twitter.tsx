
import React from 'react';
import Twitter from '../icons/twitter.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Twitter {...props} ref={ref} />);
});

// export default () => <Twitter />;
        