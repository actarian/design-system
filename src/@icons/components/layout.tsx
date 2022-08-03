
import React from 'react';
import LayoutSvg from '../icons/layout.svg';

const Layout = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LayoutSvg {...props} ref={ref} />);
});

Layout.displayName = 'Layout';

export default Layout;

// export default () => <Layout />;
        