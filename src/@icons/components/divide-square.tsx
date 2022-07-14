
import React from 'react';
import DivideSquare from '../icons/divide-square.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DivideSquare {...props} ref={ref} />);
});

// export default () => <DivideSquare />;
        