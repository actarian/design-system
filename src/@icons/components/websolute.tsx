
import React from 'react';
import WebsoluteSvg from '../icons/websolute.svg';

const Websolute = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WebsoluteSvg {...props} ref={ref} />);
});

Websolute.displayName = 'Websolute';

export default Websolute;

// export default () => <Websolute />;
        