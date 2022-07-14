
import React from 'react';
import Airplay from '../icons/airplay.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Airplay {...props} ref={ref} />);
});

// export default () => <Airplay />;
        