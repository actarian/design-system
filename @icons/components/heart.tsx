
import React from 'react';
import Heart from '../icons/heart.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Heart {...props} ref={ref} />);
});

// export default () => <Heart />;
        