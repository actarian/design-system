
import React from 'react';
import SquareSvg from '../icons/square.svg';

const Square = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SquareSvg {...props} ref={ref} />);
});

Square.displayName = 'Square';

export default Square;

// export default () => <Square />;
        