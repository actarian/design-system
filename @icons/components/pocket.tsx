
import React from 'react';
import Pocket from '../icons/pocket.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Pocket {...props} ref={ref} />);
});

// export default () => <Pocket />;
        