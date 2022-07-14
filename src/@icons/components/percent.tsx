
import React from 'react';
import Percent from '../icons/percent.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Percent {...props} ref={ref} />);
});

// export default () => <Percent />;
        