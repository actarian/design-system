
import React from 'react';
import WindSvg from '../icons/wind.svg';

const Wind = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WindSvg {...props} ref={ref} />);
});

Wind.displayName = 'Wind';

export default Wind;

// export default () => <Wind />;
        