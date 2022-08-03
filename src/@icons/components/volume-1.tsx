
import React from 'react';
import Volume1Svg from '../icons/volume-1.svg';

const Volume1 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Volume1Svg {...props} ref={ref} />);
});

Volume1.displayName = 'Volume1';

export default Volume1;

// export default () => <Volume1 />;
        