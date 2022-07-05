
import React from 'react';
import Maximize2 from '../icons/maximize-2.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Maximize2 {...props} ref={ref} />);
});

// export default () => <Maximize2 />;
        