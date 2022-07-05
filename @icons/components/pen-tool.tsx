
import React from 'react';
import PenTool from '../icons/pen-tool.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PenTool {...props} ref={ref} />);
});

// export default () => <PenTool />;
        