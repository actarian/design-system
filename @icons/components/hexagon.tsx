
import React from 'react';
import Hexagon from '../icons/hexagon.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Hexagon {...props} ref={ref} />);
});

// export default () => <Hexagon />;
        