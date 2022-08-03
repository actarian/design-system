
import React from 'react';
import Link2Svg from '../icons/link-2.svg';

const Link2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Link2Svg {...props} ref={ref} />);
});

Link2.displayName = 'Link2';

export default Link2;

// export default () => <Link2 />;
        