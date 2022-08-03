
import React from 'react';
import BoxSvg from '../icons/box.svg';

const Box = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BoxSvg {...props} ref={ref} />);
});

Box.displayName = 'Box';

export default Box;

// export default () => <Box />;
        