
import React from 'react';
import Settings from '../icons/settings.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Settings {...props} ref={ref} />);
});

// export default () => <Settings />;
        