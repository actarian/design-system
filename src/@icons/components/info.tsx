
import React from 'react';
import Info from '../icons/info.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Info {...props} ref={ref} />);
});

// export default () => <Info />;
        