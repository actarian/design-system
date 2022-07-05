
import React from 'react';
import PlayCircle from '../icons/play-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlayCircle {...props} ref={ref} />);
});

// export default () => <PlayCircle />;
        