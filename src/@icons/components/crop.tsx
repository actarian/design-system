
import React from 'react';
import Crop from '../icons/crop.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Crop {...props} ref={ref} />);
});

// export default () => <Crop />;
        