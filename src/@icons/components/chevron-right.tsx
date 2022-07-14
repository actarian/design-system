
import React from 'react';
import ChevronRight from '../icons/chevron-right.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronRight {...props} ref={ref} />);
});

// export default () => <ChevronRight />;
        