
import React from 'react';
import ChevronLeft from '../icons/chevron-left.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronLeft {...props} ref={ref} />);
});

// export default () => <ChevronLeft />;
        