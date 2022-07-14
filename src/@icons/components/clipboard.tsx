
import React from 'react';
import Clipboard from '../icons/clipboard.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Clipboard {...props} ref={ref} />);
});

// export default () => <Clipboard />;
        