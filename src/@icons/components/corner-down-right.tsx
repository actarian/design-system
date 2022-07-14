
import React from 'react';
import CornerDownRight from '../icons/corner-down-right.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerDownRight {...props} ref={ref} />);
});

// export default () => <CornerDownRight />;
        