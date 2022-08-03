
import React from 'react';
import XSquareSvg from '../icons/x-square.svg';

const XSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XSquareSvg {...props} ref={ref} />);
});

XSquare.displayName = 'XSquare';

export default XSquare;

// export default () => <XSquare />;
        