
import React from 'react';
import Frown from '../icons/frown.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Frown {...props} ref={ref} />);
});

// export default () => <Frown />;
        