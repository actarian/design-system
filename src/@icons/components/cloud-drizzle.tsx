
import React from 'react';
import CloudDrizzleSvg from '../icons/cloud-drizzle.svg';

const CloudDrizzle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudDrizzleSvg {...props} ref={ref} />);
});

CloudDrizzle.displayName = 'CloudDrizzle';

export default CloudDrizzle;

// export default () => <CloudDrizzle />;
        