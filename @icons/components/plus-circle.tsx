
import React from 'react';
import PlusCircle from '../icons/plus-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlusCircle {...props} ref={ref} />);
});

// export default () => <PlusCircle />;
        