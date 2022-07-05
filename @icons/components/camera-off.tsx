
import React from 'react';
import CameraOff from '../icons/camera-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CameraOff {...props} ref={ref} />);
});

// export default () => <CameraOff />;
        