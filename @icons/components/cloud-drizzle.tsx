
import React from 'react';
import CloudDrizzle from '../icons/cloud-drizzle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudDrizzle {...props} ref={ref} />);
});

// export default () => <CloudDrizzle />;
        