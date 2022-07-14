
import React from 'react';
import HardDrive from '../icons/hard-drive.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HardDrive {...props} ref={ref} />);
});

// export default () => <HardDrive />;
        