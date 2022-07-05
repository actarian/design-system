
import React from 'react';
import Umbrella from '../icons/umbrella.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Umbrella {...props} ref={ref} />);
});

// export default () => <Umbrella />;
        