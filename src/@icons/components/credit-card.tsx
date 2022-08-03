
import React from 'react';
import CreditCardSvg from '../icons/credit-card.svg';

const CreditCard = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CreditCardSvg {...props} ref={ref} />);
});

CreditCard.displayName = 'CreditCard';

export default CreditCard;

// export default () => <CreditCard />;
        