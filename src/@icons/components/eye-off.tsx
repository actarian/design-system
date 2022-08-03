
import React from 'react';
import EyeOffSvg from '../icons/eye-off.svg';

const EyeOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EyeOffSvg {...props} ref={ref} />);
});

EyeOff.displayName = 'EyeOff';

export default EyeOff;

// export default () => <EyeOff />;
        