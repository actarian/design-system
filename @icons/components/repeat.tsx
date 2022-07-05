
import React from 'react';
import Repeat from '../icons/repeat.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Repeat {...props} ref={ref} />);
});

// export default () => <Repeat />;
        