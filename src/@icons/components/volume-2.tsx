
import React from 'react';
import Volume2Svg from '../icons/volume-2.svg';

const Volume2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Volume2Svg {...props} ref={ref} />);
});

Volume2.displayName = 'Volume2';

export default Volume2;

// export default () => <Volume2 />;
        