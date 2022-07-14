
import React from 'react';
import Minimize from '../icons/minimize.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Minimize {...props} ref={ref} />);
});

// export default () => <Minimize />;
        