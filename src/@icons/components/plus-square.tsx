
import React from 'react';
import PlusSquareSvg from '../icons/plus-square.svg';

const PlusSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlusSquareSvg {...props} ref={ref} />);
});

PlusSquare.displayName = 'PlusSquare';

export default PlusSquare;

// export default () => <PlusSquare />;
        