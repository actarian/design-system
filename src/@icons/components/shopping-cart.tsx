
import React from 'react';
import ShoppingCart from '../icons/shopping-cart.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShoppingCart {...props} ref={ref} />);
});

// export default () => <ShoppingCart />;
        