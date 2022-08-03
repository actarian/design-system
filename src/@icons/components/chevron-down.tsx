
import React from 'react';
import ChevronDownSvg from '../icons/chevron-down.svg';

const ChevronDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronDownSvg {...props} ref={ref} />);
});

ChevronDown.displayName = 'ChevronDown';

export default ChevronDown;

// export default () => <ChevronDown />;
        