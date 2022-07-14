
import React from 'react';
import ChevronsUp from '../icons/chevrons-up.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsUp {...props} ref={ref} />);
});

// export default () => <ChevronsUp />;
        