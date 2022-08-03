
import React from 'react';
import FileSvg from '../icons/file.svg';

const File = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileSvg {...props} ref={ref} />);
});

File.displayName = 'File';

export default File;

// export default () => <File />;
        