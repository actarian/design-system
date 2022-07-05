
import React from 'react';
import Archive from '../icons/archive.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Archive {...props} ref={ref} />);
});

// export default () => <Archive />;
        