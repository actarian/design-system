
import React from 'react';
import Minus from '../icons/minus.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Minus {...props} ref={ref} />);
});

// export default () => <Minus />;
        