
import React from 'react';
import ZoomOut from '../icons/zoom-out.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ZoomOut {...props} ref={ref} />);
});

// export default () => <ZoomOut />;
        