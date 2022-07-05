
import React from 'react';
import AlignCenter from '../icons/align-center.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignCenter {...props} ref={ref} />);
});

// export default () => <AlignCenter />;
        