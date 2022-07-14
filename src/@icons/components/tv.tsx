
import React from 'react';
import Tv from '../icons/tv.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Tv {...props} ref={ref} />);
});

// export default () => <Tv />;
        