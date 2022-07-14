
import React from 'react';
import Plus from '../icons/plus.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Plus {...props} ref={ref} />);
});

// export default () => <Plus />;
        