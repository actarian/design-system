
import React from 'react';
import RewindSvg from '../icons/rewind.svg';

const Rewind = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RewindSvg {...props} ref={ref} />);
});

Rewind.displayName = 'Rewind';

export default Rewind;

// export default () => <Rewind />;
        