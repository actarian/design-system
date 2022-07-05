
import React from 'react';
import Sliders from '../icons/sliders.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Sliders {...props} ref={ref} />);
});

// export default () => <Sliders />;
        