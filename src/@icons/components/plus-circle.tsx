
import React from 'react';
import PlusCircleSvg from '../icons/plus-circle.svg';

const PlusCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlusCircleSvg {...props} ref={ref} />);
});

PlusCircle.displayName = 'PlusCircle';

export default PlusCircle;

// export default () => <PlusCircle />;
        