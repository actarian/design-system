
import React from 'react';
import MehSvg from '../icons/meh.svg';

const Meh = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MehSvg {...props} ref={ref} />);
});

Meh.displayName = 'Meh';

export default Meh;

// export default () => <Meh />;
        