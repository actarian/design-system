
import React from 'react';
import CornerRightDown from '../icons/corner-right-down.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerRightDown {...props} ref={ref} />);
});

// export default () => <CornerRightDown />;
        