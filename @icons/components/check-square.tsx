
import React from 'react';
import CheckSquare from '../icons/check-square.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CheckSquare {...props} ref={ref} />);
});

// export default () => <CheckSquare />;
        