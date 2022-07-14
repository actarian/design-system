
import React from 'react';
import Tablet from '../icons/tablet.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Tablet {...props} ref={ref} />);
});

// export default () => <Tablet />;
        