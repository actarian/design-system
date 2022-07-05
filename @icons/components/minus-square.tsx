
import React from 'react';
import MinusSquare from '../icons/minus-square.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MinusSquare {...props} ref={ref} />);
});

// export default () => <MinusSquare />;
        