
import React from 'react';
import XSquare from '../icons/x-square.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XSquare {...props} ref={ref} />);
});

// export default () => <XSquare />;
        