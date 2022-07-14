
import React from 'react';
import CornerDownLeft from '../icons/corner-down-left.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerDownLeft {...props} ref={ref} />);
});

// export default () => <CornerDownLeft />;
        