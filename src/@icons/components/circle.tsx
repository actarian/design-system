
import React from 'react';
import CircleSvg from '../icons/circle.svg';

const Circle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CircleSvg {...props} ref={ref} />);
});

Circle.displayName = 'Circle';

export default Circle;

// export default () => <Circle />;
        