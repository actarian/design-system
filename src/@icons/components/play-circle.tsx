
import React from 'react';
import PlayCircleSvg from '../icons/play-circle.svg';

const PlayCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlayCircleSvg {...props} ref={ref} />);
});

PlayCircle.displayName = 'PlayCircle';

export default PlayCircle;

// export default () => <PlayCircle />;
        