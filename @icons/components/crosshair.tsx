
import React from 'react';
import Crosshair from '../icons/crosshair.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Crosshair {...props} ref={ref} />);
});

// export default () => <Crosshair />;
        