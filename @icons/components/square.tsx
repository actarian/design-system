
import React from 'react';
import Square from '../icons/square.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Square {...props} ref={ref} />);
});

// export default () => <Square />;
        