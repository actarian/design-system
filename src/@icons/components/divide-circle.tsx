
import React from 'react';
import DivideCircle from '../icons/divide-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DivideCircle {...props} ref={ref} />);
});

// export default () => <DivideCircle />;
        