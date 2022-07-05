
import React from 'react';
import ArrowDownLeft from '../icons/arrow-down-left.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDownLeft {...props} ref={ref} />);
});

// export default () => <ArrowDownLeft />;
        