
import React from 'react';
import GlobeSvg from '../icons/globe.svg';

const Globe = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GlobeSvg {...props} ref={ref} />);
});

Globe.displayName = 'Globe';

export default Globe;

// export default () => <Globe />;
        