
import React from 'react';
import SkipBack from '../icons/skip-back.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SkipBack {...props} ref={ref} />);
});

// export default () => <SkipBack />;
        