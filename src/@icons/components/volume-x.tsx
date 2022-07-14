
import React from 'react';
import VolumeX from '../icons/volume-x.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VolumeX {...props} ref={ref} />);
});

// export default () => <VolumeX />;
        