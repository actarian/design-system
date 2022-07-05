
import React from 'react';
import CreditCard from '../icons/credit-card.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CreditCard {...props} ref={ref} />);
});

// export default () => <CreditCard />;
        