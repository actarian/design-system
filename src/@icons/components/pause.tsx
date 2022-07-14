
import React from 'react';
import Pause from '../icons/pause.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Pause {...props} ref={ref} />);
});

// export default () => <Pause />;
        