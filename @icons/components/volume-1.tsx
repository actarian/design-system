
import React from 'react';
import Volume1 from '../icons/volume-1.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Volume1 {...props} ref={ref} />);
});

// export default () => <Volume1 />;
        