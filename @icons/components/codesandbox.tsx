
import React from 'react';
import Codesandbox from '../icons/codesandbox.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Codesandbox {...props} ref={ref} />);
});

// export default () => <Codesandbox />;
        