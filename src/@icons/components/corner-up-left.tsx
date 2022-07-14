
import React from 'react';
import CornerUpLeft from '../icons/corner-up-left.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerUpLeft {...props} ref={ref} />);
});

// export default () => <CornerUpLeft />;
        