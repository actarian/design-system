
import React from 'react';
import Rewind from '../icons/rewind.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Rewind {...props} ref={ref} />);
});

// export default () => <Rewind />;
        