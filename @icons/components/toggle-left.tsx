
import React from 'react';
import ToggleLeft from '../icons/toggle-left.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ToggleLeft {...props} ref={ref} />);
});

// export default () => <ToggleLeft />;
        