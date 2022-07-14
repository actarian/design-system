
import React from 'react';
import Slash from '../icons/slash.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Slash {...props} ref={ref} />);
});

// export default () => <Slash />;
        