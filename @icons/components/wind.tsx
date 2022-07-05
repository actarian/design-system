
import React from 'react';
import Wind from '../icons/wind.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Wind {...props} ref={ref} />);
});

// export default () => <Wind />;
        