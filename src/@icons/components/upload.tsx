
import React from 'react';
import UploadSvg from '../icons/upload.svg';

const Upload = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UploadSvg {...props} ref={ref} />);
});

Upload.displayName = 'Upload';

export default Upload;

// export default () => <Upload />;
        