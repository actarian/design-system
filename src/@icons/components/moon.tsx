
import React from 'react';
import MoonSvg from '../icons/moon.svg';

const Moon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoonSvg {...props} ref={ref} />);
});

Moon.displayName = 'Moon';

export default Moon;

// export default () => <Moon />;
        