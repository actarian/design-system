
import React from 'react';
import Copy from '../icons/copy.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Copy {...props} ref={ref} />);
});

// export default () => <Copy />;
        