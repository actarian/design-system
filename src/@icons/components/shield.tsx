
import React from 'react';
import Shield from '../icons/shield.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Shield {...props} ref={ref} />);
});

// export default () => <Shield />;
        