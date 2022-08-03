
import React from 'react';
import FeatherSvg from '../icons/feather.svg';

const Feather = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FeatherSvg {...props} ref={ref} />);
});

Feather.displayName = 'Feather';

export default Feather;

// export default () => <Feather />;
        