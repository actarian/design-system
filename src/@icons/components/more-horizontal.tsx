
import React from 'react';
import MoreHorizontal from '../icons/more-horizontal.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoreHorizontal {...props} ref={ref} />);
});

// export default () => <MoreHorizontal />;
        