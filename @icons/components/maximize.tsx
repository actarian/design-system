
import React from 'react';
import Maximize from '../icons/maximize.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Maximize {...props} ref={ref} />);
});

// export default () => <Maximize />;
        