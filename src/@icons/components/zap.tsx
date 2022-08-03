
import React from 'react';
import ZapSvg from '../icons/zap.svg';

const Zap = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ZapSvg {...props} ref={ref} />);
});

Zap.displayName = 'Zap';

export default Zap;

// export default () => <Zap />;
        