
import React from 'react';
import ArrowRight from '../icons/arrow-right.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowRight {...props} ref={ref} />);
});

// export default () => <ArrowRight />;
        