
import React from 'react';
import MinusSvg from '../icons/minus.svg';

const Minus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MinusSvg {...props} ref={ref} />);
});

Minus.displayName = 'Minus';

export default Minus;

// export default () => <Minus />;
        