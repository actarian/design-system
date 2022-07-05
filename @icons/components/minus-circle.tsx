
import React from 'react';
import MinusCircle from '../icons/minus-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MinusCircle {...props} ref={ref} />);
});

// export default () => <MinusCircle />;
        