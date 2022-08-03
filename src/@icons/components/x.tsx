
import React from 'react';
import XSvg from '../icons/x.svg';

const X = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XSvg {...props} ref={ref} />);
});

X.displayName = 'X';

export default X;

// export default () => <X />;
        