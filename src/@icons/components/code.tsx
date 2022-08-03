
import React from 'react';
import CodeSvg from '../icons/code.svg';

const Code = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CodeSvg {...props} ref={ref} />);
});

Code.displayName = 'Code';

export default Code;

// export default () => <Code />;
        