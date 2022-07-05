
import React from 'react';
import ArrowDown from '../icons/arrow-down.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowDown {...props} ref={ref} />);
});

// export default () => <ArrowDown />;
        