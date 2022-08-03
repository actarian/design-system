
import React from 'react';
import FrownSvg from '../icons/frown.svg';

const Frown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FrownSvg {...props} ref={ref} />);
});

Frown.displayName = 'Frown';

export default Frown;

// export default () => <Frown />;
        