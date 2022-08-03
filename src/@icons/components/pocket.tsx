
import React from 'react';
import PocketSvg from '../icons/pocket.svg';

const Pocket = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PocketSvg {...props} ref={ref} />);
});

Pocket.displayName = 'Pocket';

export default Pocket;

// export default () => <Pocket />;
        