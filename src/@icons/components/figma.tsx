
import React from 'react';
import Figma from '../icons/figma.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Figma {...props} ref={ref} />);
});

// export default () => <Figma />;
        