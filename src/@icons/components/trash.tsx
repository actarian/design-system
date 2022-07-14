
import React from 'react';
import Trash from '../icons/trash.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Trash {...props} ref={ref} />);
});

// export default () => <Trash />;
        