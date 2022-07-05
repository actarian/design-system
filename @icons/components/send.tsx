
import React from 'react';
import Send from '../icons/send.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Send {...props} ref={ref} />);
});

// export default () => <Send />;
        