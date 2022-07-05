
import React from 'react';
import ShoppingBag from '../icons/shopping-bag.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShoppingBag {...props} ref={ref} />);
});

// export default () => <ShoppingBag />;
        