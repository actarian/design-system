
import React from 'react';
import VideoOffSvg from '../icons/video-off.svg';

const VideoOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VideoOffSvg {...props} ref={ref} />);
});

VideoOff.displayName = 'VideoOff';

export default VideoOff;

// export default () => <VideoOff />;
        