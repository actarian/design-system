
import React from 'react';
import Search from '../icons/search.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Search {...props} ref={ref} />);
});

// export default () => <Search />;
        