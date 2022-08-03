
import React from 'react';
import DownloadCloudSvg from '../icons/download-cloud.svg';

const DownloadCloud = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DownloadCloudSvg {...props} ref={ref} />);
});

DownloadCloud.displayName = 'DownloadCloud';

export default DownloadCloud;

// export default () => <DownloadCloud />;
        