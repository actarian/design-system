
import React from 'react';
import AirplaySvg from '../icons/airplay.svg';

const Airplay = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AirplaySvg {...props} ref={ref} />);
});

Airplay.displayName = 'Airplay';

export default Airplay;

// export default () => <Airplay />;
        