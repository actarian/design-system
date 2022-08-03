
import React from 'react';
import PlusSvg from '../icons/plus.svg';

const Plus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlusSvg {...props} ref={ref} />);
});

Plus.displayName = 'Plus';

export default Plus;

// export default () => <Plus />;
        