
import React from 'react';
import ArrowUpRight from '../icons/arrow-up-right.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUpRight {...props} ref={ref} />);
});

// export default () => <ArrowUpRight />;
        