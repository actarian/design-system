
import React from 'react';
import PowerSvg from '../icons/power.svg';

const Power = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PowerSvg {...props} ref={ref} />);
});

Power.displayName = 'Power';

export default Power;

// export default () => <Power />;
        