
import React from 'react';
import Codepen from '../icons/codepen.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Codepen {...props} ref={ref} />);
});

// export default () => <Codepen />;
        