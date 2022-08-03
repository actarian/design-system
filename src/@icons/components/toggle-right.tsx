
import React from 'react';
import ToggleRightSvg from '../icons/toggle-right.svg';

const ToggleRight = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ToggleRightSvg {...props} ref={ref} />);
});

ToggleRight.displayName = 'ToggleRight';

export default ToggleRight;

// export default () => <ToggleRight />;
        