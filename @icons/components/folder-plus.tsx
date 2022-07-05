
import React from 'react';
import FolderPlus from '../icons/folder-plus.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderPlus {...props} ref={ref} />);
});

// export default () => <FolderPlus />;
        