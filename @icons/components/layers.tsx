
import React from 'react';
import Layers from '../icons/layers.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Layers {...props} ref={ref} />);
});

// export default () => <Layers />;
        