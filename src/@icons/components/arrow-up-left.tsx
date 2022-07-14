
import React from 'react';
import ArrowUpLeft from '../icons/arrow-up-left.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUpLeft {...props} ref={ref} />);
});

// export default () => <ArrowUpLeft />;
        