
import React from 'react';
import MicSvg from '../icons/mic.svg';

const Mic = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MicSvg {...props} ref={ref} />);
});

Mic.displayName = 'Mic';

export default Mic;

// export default () => <Mic />;
        