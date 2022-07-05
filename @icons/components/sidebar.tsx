
import React from 'react';
import Sidebar from '../icons/sidebar.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Sidebar {...props} ref={ref} />);
});

// export default () => <Sidebar />;
        