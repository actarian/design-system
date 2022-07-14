
import React from 'react';
import Grid from '../icons/grid.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Grid {...props} ref={ref} />);
});

// export default () => <Grid />;
        