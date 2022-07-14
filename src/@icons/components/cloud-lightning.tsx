
import React from 'react';
import CloudLightning from '../icons/cloud-lightning.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CloudLightning {...props} ref={ref} />);
});

// export default () => <CloudLightning />;
        