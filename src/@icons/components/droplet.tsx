
import React from 'react';
import Droplet from '../icons/droplet.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Droplet {...props} ref={ref} />);
});

// export default () => <Droplet />;
        