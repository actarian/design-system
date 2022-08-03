
import React from 'react';
import ChromeSvg from '../icons/chrome.svg';

const Chrome = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChromeSvg {...props} ref={ref} />);
});

Chrome.displayName = 'Chrome';

export default Chrome;

// export default () => <Chrome />;
        