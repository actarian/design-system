
import React from 'react';
import VideoOff from '../icons/video-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VideoOff {...props} ref={ref} />);
});

// export default () => <VideoOff />;
        