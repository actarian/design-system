
import React from 'react';
import TabletSvg from '../icons/tablet.svg';

const Tablet = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TabletSvg {...props} ref={ref} />);
});

Tablet.displayName = 'Tablet';

export default Tablet;

// export default () => <Tablet />;
        