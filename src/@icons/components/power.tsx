
import React from 'react';
import Power from '../icons/power.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Power {...props} ref={ref} />);
});

// export default () => <Power />;
        