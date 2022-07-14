
import React from 'react';
import Triangle from '../icons/triangle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Triangle {...props} ref={ref} />);
});

// export default () => <Triangle />;
        