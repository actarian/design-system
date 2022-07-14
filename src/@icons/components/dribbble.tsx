
import React from 'react';
import Dribbble from '../icons/dribbble.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Dribbble {...props} ref={ref} />);
});

// export default () => <Dribbble />;
        