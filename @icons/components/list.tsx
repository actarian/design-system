
import React from 'react';
import List from '../icons/list.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<List {...props} ref={ref} />);
});

// export default () => <List />;
        