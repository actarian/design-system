
import React from 'react';
import Play from '../icons/play.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Play {...props} ref={ref} />);
});

// export default () => <Play />;
        