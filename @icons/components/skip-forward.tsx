
import React from 'react';
import SkipForward from '../icons/skip-forward.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SkipForward {...props} ref={ref} />);
});

// export default () => <SkipForward />;
        