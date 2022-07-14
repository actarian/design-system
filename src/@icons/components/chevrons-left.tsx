
import React from 'react';
import ChevronsLeft from '../icons/chevrons-left.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsLeft {...props} ref={ref} />);
});

// export default () => <ChevronsLeft />;
        