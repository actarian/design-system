
import React from 'react';
import HeartSvg from '../icons/heart.svg';

const Heart = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HeartSvg {...props} ref={ref} />);
});

Heart.displayName = 'Heart';

export default Heart;

// export default () => <Heart />;
        