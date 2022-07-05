
import React from 'react';
import Activity from '../icons/activity.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Activity {...props} ref={ref} />);
});

// export default () => <Activity />;
        