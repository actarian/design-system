
import React from 'react';
import Smartphone from '../icons/smartphone.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Smartphone {...props} ref={ref} />);
});

// export default () => <Smartphone />;
        