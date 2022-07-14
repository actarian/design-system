
import React from 'react';
import Aperture from '../icons/aperture.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Aperture {...props} ref={ref} />);
});

// export default () => <Aperture />;
        