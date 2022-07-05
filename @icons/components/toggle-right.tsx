
import React from 'react';
import ToggleRight from '../icons/toggle-right.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ToggleRight {...props} ref={ref} />);
});

// export default () => <ToggleRight />;
        