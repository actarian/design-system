
import React from 'react';
import PenToolSvg from '../icons/pen-tool.svg';

const PenTool = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PenToolSvg {...props} ref={ref} />);
});

PenTool.displayName = 'PenTool';

export default PenTool;

// export default () => <PenTool />;
        