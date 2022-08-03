
import React from 'react';
import CheckSvg from '../icons/check.svg';

const Check = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CheckSvg {...props} ref={ref} />);
});

Check.displayName = 'Check';

export default Check;

// export default () => <Check />;
        