
import React from 'react';
import Bold from '../icons/bold.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Bold {...props} ref={ref} />);
});

// export default () => <Bold />;
        