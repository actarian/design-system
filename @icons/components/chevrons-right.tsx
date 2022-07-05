
import React from 'react';
import ChevronsRight from '../icons/chevrons-right.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsRight {...props} ref={ref} />);
});

// export default () => <ChevronsRight />;
        