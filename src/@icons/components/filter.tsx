
import React from 'react';
import Filter from '../icons/filter.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Filter {...props} ref={ref} />);
});

// export default () => <Filter />;
        