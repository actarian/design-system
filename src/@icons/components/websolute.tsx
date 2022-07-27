
import React from 'react';
import Websolute from '../icons/websolute.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Websolute {...props} ref={ref} />);
});

// export default () => <Websolute />;
        