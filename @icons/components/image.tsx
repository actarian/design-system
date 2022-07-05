
import React from 'react';
import Image from '../icons/image.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Image {...props} ref={ref} />);
});

// export default () => <Image />;
        