
import React from 'react';
import Loader from '../icons/loader.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Loader {...props} ref={ref} />);
});

// export default () => <Loader />;
        