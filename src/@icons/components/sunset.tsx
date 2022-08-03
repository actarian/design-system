
import React from 'react';
import SunsetSvg from '../icons/sunset.svg';

const Sunset = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SunsetSvg {...props} ref={ref} />);
});

Sunset.displayName = 'Sunset';

export default Sunset;

// export default () => <Sunset />;
        