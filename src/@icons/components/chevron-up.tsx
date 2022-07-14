
import React from 'react';
import ChevronUp from '../icons/chevron-up.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronUp {...props} ref={ref} />);
});

// export default () => <ChevronUp />;
        