
import React from 'react';
import SidebarSvg from '../icons/sidebar.svg';

const Sidebar = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SidebarSvg {...props} ref={ref} />);
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;

// export default () => <Sidebar />;
        