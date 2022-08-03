
import React from 'react';
import SmartphoneSvg from '../icons/smartphone.svg';

const Smartphone = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SmartphoneSvg {...props} ref={ref} />);
});

Smartphone.displayName = 'Smartphone';

export default Smartphone;

// export default () => <Smartphone />;
        