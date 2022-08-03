
import React from 'react';
import Trash2Svg from '../icons/trash-2.svg';

const Trash2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Trash2Svg {...props} ref={ref} />);
});

Trash2.displayName = 'Trash2';

export default Trash2;

// export default () => <Trash2 />;
        