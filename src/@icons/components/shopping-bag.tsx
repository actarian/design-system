
import React from 'react';
import ShoppingBagSvg from '../icons/shopping-bag.svg';

const ShoppingBag = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShoppingBagSvg {...props} ref={ref} />);
});

ShoppingBag.displayName = 'ShoppingBag';

export default ShoppingBag;

// export default () => <ShoppingBag />;
        