
import React from 'react';
import OctagonSvg from '../icons/octagon.svg';

const Octagon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<OctagonSvg {...props} ref={ref} />);
});

Octagon.displayName = 'Octagon';

export default Octagon;

// export default () => <Octagon />;
        