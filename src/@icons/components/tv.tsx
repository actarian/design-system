
import React from 'react';
import TvSvg from '../icons/tv.svg';

const Tv = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TvSvg {...props} ref={ref} />);
});

Tv.displayName = 'Tv';

export default Tv;

// export default () => <Tv />;
        