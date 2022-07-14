
import React from 'react';
import Linkedin from '../icons/linkedin.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Linkedin {...props} ref={ref} />);
});

// export default () => <Linkedin />;
        