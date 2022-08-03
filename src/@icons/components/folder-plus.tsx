
import React from 'react';
import FolderPlusSvg from '../icons/folder-plus.svg';

const FolderPlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FolderPlusSvg {...props} ref={ref} />);
});

FolderPlus.displayName = 'FolderPlus';

export default FolderPlus;

// export default () => <FolderPlus />;
        