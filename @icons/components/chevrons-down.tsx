
import React from 'react';
import ChevronsDown from '../icons/chevrons-down.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsDown {...props} ref={ref} />);
});

// export default () => <ChevronsDown />;
        