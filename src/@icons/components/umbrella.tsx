
import React from 'react';
import UmbrellaSvg from '../icons/umbrella.svg';

const Umbrella = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UmbrellaSvg {...props} ref={ref} />);
});

Umbrella.displayName = 'Umbrella';

export default Umbrella;

// export default () => <Umbrella />;
        