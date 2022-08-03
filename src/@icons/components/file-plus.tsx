
import React from 'react';
import FilePlusSvg from '../icons/file-plus.svg';

const FilePlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilePlusSvg {...props} ref={ref} />);
});

FilePlus.displayName = 'FilePlus';

export default FilePlus;

// export default () => <FilePlus />;
        