
import React from 'react';
import Coffee from '../icons/coffee.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Coffee {...props} ref={ref} />);
});

// export default () => <Coffee />;
        