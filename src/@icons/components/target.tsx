
import React from 'react';
import Target from '../icons/target.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Target {...props} ref={ref} />);
});

// export default () => <Target />;
        