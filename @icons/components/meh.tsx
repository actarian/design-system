
import React from 'react';
import Meh from '../icons/meh.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Meh {...props} ref={ref} />);
});

// export default () => <Meh />;
        