
import React from 'react';
import ChevronUpSvg from '../icons/chevron-up.svg';

const ChevronUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronUpSvg {...props} ref={ref} />);
});

ChevronUp.displayName = 'ChevronUp';

export default ChevronUp;

// export default () => <ChevronUp />;
        