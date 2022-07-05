
import React from 'react';
import PlusSquare from '../icons/plus-square.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlusSquare {...props} ref={ref} />);
});

// export default () => <PlusSquare />;
        