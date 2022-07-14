
import React from 'react';
import Cpu from '../icons/cpu.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Cpu {...props} ref={ref} />);
});

// export default () => <Cpu />;
        