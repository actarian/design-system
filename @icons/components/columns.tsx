
import React from 'react';
import Columns from '../icons/columns.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Columns {...props} ref={ref} />);
});

// export default () => <Columns />;
        