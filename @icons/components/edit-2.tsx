
import React from 'react';
import Edit2 from '../icons/edit-2.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Edit2 {...props} ref={ref} />);
});

// export default () => <Edit2 />;
        