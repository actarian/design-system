
import React from 'react';
import Unlock from '../icons/unlock.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Unlock {...props} ref={ref} />);
});

// export default () => <Unlock />;
        