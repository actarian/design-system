
import React from 'react';
import Award from '../icons/award.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Award {...props} ref={ref} />);
});

// export default () => <Award />;
        