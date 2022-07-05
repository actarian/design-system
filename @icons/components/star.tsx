
import React from 'react';
import Star from '../icons/star.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Star {...props} ref={ref} />);
});

// export default () => <Star />;
        