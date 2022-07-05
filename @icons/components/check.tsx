
import React from 'react';
import Check from '../icons/check.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Check {...props} ref={ref} />);
});

// export default () => <Check />;
        