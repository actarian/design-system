
import React from 'react';
import Scissors from '../icons/scissors.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Scissors {...props} ref={ref} />);
});

// export default () => <Scissors />;
        