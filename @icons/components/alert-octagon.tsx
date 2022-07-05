
import React from 'react';
import AlertOctagon from '../icons/alert-octagon.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlertOctagon {...props} ref={ref} />);
});

// export default () => <AlertOctagon />;
        