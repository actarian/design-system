
import React from 'react';
import Link from '../icons/link.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Link {...props} ref={ref} />);
});

// export default () => <Link />;
        