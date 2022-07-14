
import React from 'react';
import Delete from '../icons/delete.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Delete {...props} ref={ref} />);
});

// export default () => <Delete />;
        