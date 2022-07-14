
import React from 'react';
import Minimize2 from '../icons/minimize-2.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Minimize2 {...props} ref={ref} />);
});

// export default () => <Minimize2 />;
        