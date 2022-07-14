
import React from 'react';
import Bluetooth from '../icons/bluetooth.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Bluetooth {...props} ref={ref} />);
});

// export default () => <Bluetooth />;
        