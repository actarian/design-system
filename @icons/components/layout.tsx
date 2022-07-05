
import React from 'react';
import Layout from '../icons/layout.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Layout {...props} ref={ref} />);
});

// export default () => <Layout />;
        