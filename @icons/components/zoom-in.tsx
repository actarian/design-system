
import React from 'react';
import ZoomIn from '../icons/zoom-in.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ZoomIn {...props} ref={ref} />);
});

// export default () => <ZoomIn />;
        