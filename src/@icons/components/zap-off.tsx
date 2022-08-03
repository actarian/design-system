
import React from 'react';
import ZapOffSvg from '../icons/zap-off.svg';

const ZapOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ZapOffSvg {...props} ref={ref} />);
});

ZapOff.displayName = 'ZapOff';

export default ZapOff;

// export default () => <ZapOff />;
        