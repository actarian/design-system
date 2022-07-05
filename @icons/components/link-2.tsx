
import React from 'react';
import Link2 from '../icons/link-2.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Link2 {...props} ref={ref} />);
});

// export default () => <Link2 />;
        