
import React from 'react';
import FastForward from '../icons/fast-forward.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FastForward {...props} ref={ref} />);
});

// export default () => <FastForward />;
        