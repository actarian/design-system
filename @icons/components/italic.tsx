
import React from 'react';
import Italic from '../icons/italic.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Italic {...props} ref={ref} />);
});

// export default () => <Italic />;
        