
import React from 'react';
import ToggleLeftSvg from '../icons/toggle-left.svg';

const ToggleLeft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ToggleLeftSvg {...props} ref={ref} />);
});

ToggleLeft.displayName = 'ToggleLeft';

export default ToggleLeft;

// export default () => <ToggleLeft />;
        