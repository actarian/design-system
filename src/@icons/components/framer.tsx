
import React from 'react';
import Framer from '../icons/framer.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Framer {...props} ref={ref} />);
});

// export default () => <Framer />;
        