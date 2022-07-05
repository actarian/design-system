
import React from 'react';
import Eye from '../icons/eye.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Eye {...props} ref={ref} />);
});

// export default () => <Eye />;
        