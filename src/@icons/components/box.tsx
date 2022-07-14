
import React from 'react';
import Box from '../icons/box.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Box {...props} ref={ref} />);
});

// export default () => <Box />;
        