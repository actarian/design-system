
import React from 'react';
import Camera from '../icons/camera.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Camera {...props} ref={ref} />);
});

// export default () => <Camera />;
        