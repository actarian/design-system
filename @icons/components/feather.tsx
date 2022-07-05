
import React from 'react';
import Feather from '../icons/feather.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Feather {...props} ref={ref} />);
});

// export default () => <Feather />;
        