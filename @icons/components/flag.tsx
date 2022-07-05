
import React from 'react';
import Flag from '../icons/flag.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Flag {...props} ref={ref} />);
});

// export default () => <Flag />;
        