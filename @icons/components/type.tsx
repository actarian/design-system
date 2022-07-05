
import React from 'react';
import Type from '../icons/type.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Type {...props} ref={ref} />);
});

// export default () => <Type />;
        