
import React from 'react';
import CloudSvg from '../icons/cloud.svg';

const Cloud = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudSvg {...props} ref={ref} />);
});

Cloud.displayName = 'Cloud';

export default Cloud;

// export default () => <Cloud />;
        