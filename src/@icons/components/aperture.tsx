
import React from 'react';
import ApertureSvg from '../icons/aperture.svg';

const Aperture = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ApertureSvg {...props} ref={ref} />);
});

Aperture.displayName = 'Aperture';

export default Aperture;

// export default () => <Aperture />;
        