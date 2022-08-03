
import React from 'react';
import ChevronsRightSvg from '../icons/chevrons-right.svg';

const ChevronsRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ChevronsRightSvg {...props} ref={ref} />);
});

ChevronsRight.displayName = 'ChevronsRight';

export default ChevronsRight;

// export default () => <ChevronsRight />;
        