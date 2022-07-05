
import React from 'react';
import Server from '../icons/server.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Server {...props} ref={ref} />);
});

// export default () => <Server />;
        