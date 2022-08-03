
import React from 'react';
import DivideSvg from '../icons/divide.svg';

const Divide = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DivideSvg {...props} ref={ref} />);
});

Divide.displayName = 'Divide';

export default Divide;

// export default () => <Divide />;
        