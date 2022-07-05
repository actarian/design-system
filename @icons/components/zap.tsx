
import React from 'react';
import Zap from '../icons/zap.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Zap {...props} ref={ref} />);
});

// export default () => <Zap />;
        