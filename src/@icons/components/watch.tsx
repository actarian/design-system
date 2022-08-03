
import React from 'react';
import WatchSvg from '../icons/watch.svg';

const Watch = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WatchSvg {...props} ref={ref} />);
});

Watch.displayName = 'Watch';

export default Watch;

// export default () => <Watch />;
        