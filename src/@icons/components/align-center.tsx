
import React from 'react';
import AlignCenterSvg from '../icons/align-center.svg';

const AlignCenter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignCenterSvg {...props} ref={ref} />);
});

AlignCenter.displayName = 'AlignCenter';

export default AlignCenter;

// export default () => <AlignCenter />;
        