
import React from 'react';
import Tool from '../icons/tool.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Tool {...props} ref={ref} />);
});

// export default () => <Tool />;
        