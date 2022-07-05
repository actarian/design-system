
import React from 'react';
import Divide from '../icons/divide.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Divide {...props} ref={ref} />);
});

// export default () => <Divide />;
        