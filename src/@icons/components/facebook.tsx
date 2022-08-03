
import React from 'react';
import FacebookSvg from '../icons/facebook.svg';

const Facebook = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FacebookSvg {...props} ref={ref} />);
});

Facebook.displayName = 'Facebook';

export default Facebook;

// export default () => <Facebook />;
        