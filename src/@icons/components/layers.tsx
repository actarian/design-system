
import React from 'react';
import LayersSvg from '../icons/layers.svg';

const Layers = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LayersSvg {...props} ref={ref} />);
});

Layers.displayName = 'Layers';

export default Layers;

// export default () => <Layers />;
        