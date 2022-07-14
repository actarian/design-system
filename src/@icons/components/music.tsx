
import React from 'react';
import Music from '../icons/music.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Music {...props} ref={ref} />);
});

// export default () => <Music />;
        