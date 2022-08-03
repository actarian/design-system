
import React from 'react';
import BoldSvg from '../icons/bold.svg';

const Bold = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BoldSvg {...props} ref={ref} />);
});

Bold.displayName = 'Bold';

export default Bold;

// export default () => <Bold />;
        