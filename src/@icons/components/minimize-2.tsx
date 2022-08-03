
import React from 'react';
import Minimize2Svg from '../icons/minimize-2.svg';

const Minimize2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Minimize2Svg {...props} ref={ref} />);
});

Minimize2.displayName = 'Minimize2';

export default Minimize2;

// export default () => <Minimize2 />;
        