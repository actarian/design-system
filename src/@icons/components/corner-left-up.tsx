
import React from 'react';
import CornerLeftUp from '../icons/corner-left-up.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CornerLeftUp {...props} ref={ref} />);
});

// export default () => <CornerLeftUp />;
        