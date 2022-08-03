
import React from 'react';
import UploadCloudSvg from '../icons/upload-cloud.svg';

const UploadCloud = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UploadCloudSvg {...props} ref={ref} />);
});

UploadCloud.displayName = 'UploadCloud';

export default UploadCloud;

// export default () => <UploadCloud />;
        