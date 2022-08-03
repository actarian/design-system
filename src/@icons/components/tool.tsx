
import React from 'react';
import ToolSvg from '../icons/tool.svg';

const Tool = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ToolSvg {...props} ref={ref} />);
});

Tool.displayName = 'Tool';

export default Tool;

// export default () => <Tool />;
        