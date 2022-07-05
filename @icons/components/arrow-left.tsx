
import React from 'react';
import ArrowLeft from '../icons/arrow-left.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ArrowLeft {...props} ref={ref} />);
});

// export default () => <ArrowLeft />;
        