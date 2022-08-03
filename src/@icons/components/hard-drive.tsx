
import React from 'react';
import HardDriveSvg from '../icons/hard-drive.svg';

const HardDrive = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HardDriveSvg {...props} ref={ref} />);
});

HardDrive.displayName = 'HardDrive';

export default HardDrive;

// export default () => <HardDrive />;
        