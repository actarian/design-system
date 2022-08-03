
import React from 'react';
import CodesandboxSvg from '../icons/codesandbox.svg';

const Codesandbox = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CodesandboxSvg {...props} ref={ref} />);
});

Codesandbox.displayName = 'Codesandbox';

export default Codesandbox;

// export default () => <Codesandbox />;
        