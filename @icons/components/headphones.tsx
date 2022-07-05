
import React from 'react';
import Headphones from '../icons/headphones.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Headphones {...props} ref={ref} />);
});

// export default () => <Headphones />;
        