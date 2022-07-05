
import React from 'react';
import Shuffle from '../icons/shuffle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Shuffle {...props} ref={ref} />);
});

// export default () => <Shuffle />;
        