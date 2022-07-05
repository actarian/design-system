
import React from 'react';
import Wifi from '../icons/wifi.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Wifi {...props} ref={ref} />);
});

// export default () => <Wifi />;
        