
import React from 'react';
import Gift from '../icons/gift.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Gift {...props} ref={ref} />);
});

// export default () => <Gift />;
        