
import React from 'react';
import VideoSvg from '../icons/video.svg';

const Video = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VideoSvg {...props} ref={ref} />);
});

Video.displayName = 'Video';

export default Video;

// export default () => <Video />;
        