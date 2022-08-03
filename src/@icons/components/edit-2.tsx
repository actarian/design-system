
import React from 'react';
import Edit2Svg from '../icons/edit-2.svg';

const Edit2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Edit2Svg {...props} ref={ref} />);
});

Edit2.displayName = 'Edit2';

export default Edit2;

// export default () => <Edit2 />;
        