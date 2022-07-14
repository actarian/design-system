
import React from 'react';
import Code from '../icons/code.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Code {...props} ref={ref} />);
});

// export default () => <Code />;
        