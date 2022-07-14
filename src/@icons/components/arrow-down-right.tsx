
import React from 'react';
import ArrowDownRight from '../icons/arrow-down-right.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownRight {...props} ref={ref} />);
});

// export default () => <ArrowDownRight />;
        