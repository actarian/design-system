
import React from 'react';
import PauseSvg from '../icons/pause.svg';

const Pause = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PauseSvg {...props} ref={ref} />);
});

Pause.displayName = 'Pause';

export default Pause;

// export default () => <Pause />;
        