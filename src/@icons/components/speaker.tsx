
import React from 'react';
import Speaker from '../icons/speaker.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Speaker {...props} ref={ref} />);
});

// export default () => <Speaker />;
        