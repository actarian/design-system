
import React from 'react';
import MoreVertical from '../icons/more-vertical.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoreVertical {...props} ref={ref} />);
});

// export default () => <MoreVertical />;
        