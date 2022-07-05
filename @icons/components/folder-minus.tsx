
import React from 'react';
import FolderMinus from '../icons/folder-minus.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderMinus {...props} ref={ref} />);
});

// export default () => <FolderMinus />;
        