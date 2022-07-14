
import React from 'react';
import Facebook from '../icons/facebook.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Facebook {...props} ref={ref} />);
});

// export default () => <Facebook />;
        