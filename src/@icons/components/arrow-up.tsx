
import React from 'react';
import ArrowUp from '../icons/arrow-up.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowUp {...props} ref={ref} />);
});

// export default () => <ArrowUp />;
        