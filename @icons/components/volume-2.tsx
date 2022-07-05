
import React from 'react';
import Volume2 from '../icons/volume-2.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Volume2 {...props} ref={ref} />);
});

// export default () => <Volume2 />;
        