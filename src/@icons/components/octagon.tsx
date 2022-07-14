
import React from 'react';
import Octagon from '../icons/octagon.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Octagon {...props} ref={ref} />);
});

// export default () => <Octagon />;
        