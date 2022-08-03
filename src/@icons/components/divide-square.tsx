
import React from 'react';
import DivideSquareSvg from '../icons/divide-square.svg';

const DivideSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DivideSquareSvg {...props} ref={ref} />);
});

DivideSquare.displayName = 'DivideSquare';

export default DivideSquare;

// export default () => <DivideSquare />;
        