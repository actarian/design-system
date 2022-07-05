
import React from 'react';
import XOctagon from '../icons/x-octagon.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XOctagon {...props} ref={ref} />);
});

// export default () => <XOctagon />;
        