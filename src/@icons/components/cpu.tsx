
import React from 'react';
import CpuSvg from '../icons/cpu.svg';

const Cpu = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CpuSvg {...props} ref={ref} />);
});

Cpu.displayName = 'Cpu';

export default Cpu;

// export default () => <Cpu />;
        