
import React from 'react';
import CameraSvg from '../icons/camera.svg';

const Camera = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CameraSvg {...props} ref={ref} />);
});

Camera.displayName = 'Camera';

export default Camera;

// export default () => <Camera />;
        