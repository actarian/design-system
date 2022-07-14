
import React from 'react';
import Edit from '../icons/edit.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Edit {...props} ref={ref} />);
});

// export default () => <Edit />;
        