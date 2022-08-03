
import React from 'react';
import ChevronsLeftSvg from '../icons/chevrons-left.svg';

const ChevronsLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsLeftSvg {...props} ref={ref} />);
});

ChevronsLeft.displayName = 'ChevronsLeft';

export default ChevronsLeft;

// export default () => <ChevronsLeft />;
        