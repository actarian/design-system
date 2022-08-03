
import React from 'react';
import CopySvg from '../icons/copy.svg';

const Copy = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CopySvg {...props} ref={ref} />);
});

Copy.displayName = 'Copy';

export default Copy;

// export default () => <Copy />;
        