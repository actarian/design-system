
import React from 'react';
import ShieldOffSvg from '../icons/shield-off.svg';

const ShieldOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShieldOffSvg {...props} ref={ref} />);
});

ShieldOff.displayName = 'ShieldOff';

export default ShieldOff;

// export default () => <ShieldOff />;
        