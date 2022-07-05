
import React from 'react';
import FilePlus from '../icons/file-plus.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilePlus {...props} ref={ref} />);
});

// export default () => <FilePlus />;
        