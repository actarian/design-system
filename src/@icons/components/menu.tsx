
import React from 'react';
import Menu from '../icons/menu.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Menu {...props} ref={ref} />);
});

// export default () => <Menu />;
        