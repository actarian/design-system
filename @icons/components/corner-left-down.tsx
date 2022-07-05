
import React from 'react';
import CornerLeftDown from '../icons/corner-left-down.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerLeftDown {...props} ref={ref} />);
});

// export default () => <CornerLeftDown />;
        