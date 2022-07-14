
import React from 'react';
import Chrome from '../icons/chrome.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Chrome {...props} ref={ref} />);
});

// export default () => <Chrome />;
        