
import React from 'react';
import VolumeXSvg from '../icons/volume-x.svg';

const VolumeX = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VolumeXSvg {...props} ref={ref} />);
});

VolumeX.displayName = 'VolumeX';

export default VolumeX;

// export default () => <VolumeX />;
        