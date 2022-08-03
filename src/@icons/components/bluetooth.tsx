
import React from 'react';
import BluetoothSvg from '../icons/bluetooth.svg';

const Bluetooth = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BluetoothSvg {...props} ref={ref} />);
});

Bluetooth.displayName = 'Bluetooth';

export default Bluetooth;

// export default () => <Bluetooth />;
        