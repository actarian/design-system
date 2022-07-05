
import React from 'react';
import Instagram from '../icons/instagram.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Instagram {...props} ref={ref} />);
});

// export default () => <Instagram />;
        