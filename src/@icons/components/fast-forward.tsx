
import React from 'react';
import FastForwardSvg from '../icons/fast-forward.svg';

const FastForward = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FastForwardSvg {...props} ref={ref} />);
});

FastForward.displayName = 'FastForward';

export default FastForward;

// export default () => <FastForward />;
        