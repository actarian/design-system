
import React from 'react';
import CheckSquareSvg from '../icons/check-square.svg';

const CheckSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CheckSquareSvg {...props} ref={ref} />);
});

CheckSquare.displayName = 'CheckSquare';

export default CheckSquare;

// export default () => <CheckSquare />;
        