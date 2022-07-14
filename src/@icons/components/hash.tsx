
import React from 'react';
import Hash from '../icons/hash.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Hash {...props} ref={ref} />);
});

// export default () => <Hash />;
        