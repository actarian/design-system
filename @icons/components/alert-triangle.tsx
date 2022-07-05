
import React from 'react';
import AlertTriangle from '../icons/alert-triangle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlertTriangle {...props} ref={ref} />);
});

// export default () => <AlertTriangle />;
        