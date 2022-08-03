
import React from 'react';
import DribbbleSvg from '../icons/dribbble.svg';

const Dribbble = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DribbbleSvg {...props} ref={ref} />);
});

Dribbble.displayName = 'Dribbble';

export default Dribbble;

// export default () => <Dribbble />;
        