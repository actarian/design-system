
import React from 'react';
import ZapOff from '../icons/zap-off.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ZapOff {...props} ref={ref} />);
});

// export default () => <ZapOff />;
        