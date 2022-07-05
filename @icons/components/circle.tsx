
import React from 'react';
import Circle from '../icons/circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Circle {...props} ref={ref} />);
});

// export default () => <Circle />;
        