
import React from 'react';
import ChevronDown from '../icons/chevron-down.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronDown {...props} ref={ref} />);
});

// export default () => <ChevronDown />;
        