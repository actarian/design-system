
import React from 'react';
import Compass from '../icons/compass.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Compass {...props} ref={ref} />);
});

// export default () => <Compass />;
        