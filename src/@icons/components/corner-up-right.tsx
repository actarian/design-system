
import React from 'react';
import CornerUpRight from '../icons/corner-up-right.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerUpRight {...props} ref={ref} />);
});

// export default () => <CornerUpRight />;
        