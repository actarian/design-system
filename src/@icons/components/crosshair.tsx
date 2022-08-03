
import React from 'react';
import CrosshairSvg from '../icons/crosshair.svg';

const Crosshair = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CrosshairSvg {...props} ref={ref} />);
});

Crosshair.displayName = 'Crosshair';

export default Crosshair;

// export default () => <Crosshair />;
        