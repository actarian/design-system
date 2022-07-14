
import React from 'react';
import CornerRightUp from '../icons/corner-right-up.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerRightUp {...props} ref={ref} />);
});

// export default () => <CornerRightUp />;
        