
import React from 'react';
import Edit3 from '../icons/edit-3.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Edit3 {...props} ref={ref} />);
});

// export default () => <Edit3 />;
        