
import React from 'react';
import LinkedinSvg from '../icons/linkedin.svg';

const Linkedin = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LinkedinSvg {...props} ref={ref} />);
});

Linkedin.displayName = 'Linkedin';

export default Linkedin;

// export default () => <Linkedin />;
        