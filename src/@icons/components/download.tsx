
import React from 'react';
import Download from '../icons/download.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Download {...props} ref={ref} />);
});

// export default () => <Download />;
        