
import React from 'react';
import YoutubeSvg from '../icons/youtube.svg';

const Youtube = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<YoutubeSvg {...props} ref={ref} />);
});

Youtube.displayName = 'Youtube';

export default Youtube;

// export default () => <Youtube />;
        