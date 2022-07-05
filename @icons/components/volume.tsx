
import React from 'react';
import Volume from '../icons/volume.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Volume {...props} ref={ref} />);
});

// export default () => <Volume />;
        