
import React from 'react';
import Trash2 from '../icons/trash-2.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Trash2 {...props} ref={ref} />);
});

// export default () => <Trash2 />;
        