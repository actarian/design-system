
import React from 'react';
import RotateCw from '../icons/rotate-cw.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RotateCw {...props} ref={ref} />);
});

// export default () => <RotateCw />;
        