
import React from 'react';
import CornerLeftUpSvg from '../icons/corner-left-up.svg';

const CornerLeftUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerLeftUpSvg {...props} ref={ref} />);
});

CornerLeftUp.displayName = 'CornerLeftUp';

export default CornerLeftUp;

// export default () => <CornerLeftUp />;
        