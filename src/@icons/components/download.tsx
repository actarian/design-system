
import React from 'react';
import DownloadSvg from '../icons/download.svg';

const Download = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DownloadSvg {...props} ref={ref} />);
});

Download.displayName = 'Download';

export default Download;

// export default () => <Download />;
        