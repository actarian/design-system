
import React from 'react';
import Underline from '../icons/underline.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Underline {...props} ref={ref} />);
});

// export default () => <Underline />;
        