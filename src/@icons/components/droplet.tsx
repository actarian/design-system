
import React from 'react';
import DropletSvg from '../icons/droplet.svg';

const Droplet = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DropletSvg {...props} ref={ref} />);
});

Droplet.displayName = 'Droplet';

export default Droplet;

// export default () => <Droplet />;
        