
import React from 'react';
import CoffeeSvg from '../icons/coffee.svg';

const Coffee = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CoffeeSvg {...props} ref={ref} />);
});

Coffee.displayName = 'Coffee';

export default Coffee;

// export default () => <Coffee />;
        