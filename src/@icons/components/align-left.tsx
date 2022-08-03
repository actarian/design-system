
import React from 'react';
import AlignLeftSvg from '../icons/align-left.svg';

const AlignLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignLeftSvg {...props} ref={ref} />);
});

AlignLeft.displayName = 'AlignLeft';

export default AlignLeft;

// export default () => <AlignLeft />;
        