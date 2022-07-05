
import React from 'react';
import FileMinus from '../icons/file-minus.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileMinus {...props} ref={ref} />);
});

// export default () => <FileMinus />;
        