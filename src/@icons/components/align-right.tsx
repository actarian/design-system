
import React from 'react';
import AlignRightSvg from '../icons/align-right.svg';

const AlignRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignRightSvg {...props} ref={ref} />);
});

AlignRight.displayName = 'AlignRight';

export default AlignRight;

// export default () => <AlignRight />;
        