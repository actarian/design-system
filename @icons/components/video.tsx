
import React from 'react';
import Video from '../icons/video.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Video {...props} ref={ref} />);
});

// export default () => <Video />;
        