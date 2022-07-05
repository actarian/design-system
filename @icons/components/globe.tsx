
import React from 'react';
import Globe from '../icons/globe.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Globe {...props} ref={ref} />);
});

// export default () => <Globe />;
        