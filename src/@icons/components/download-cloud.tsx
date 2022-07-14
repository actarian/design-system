
import React from 'react';
import DownloadCloud from '../icons/download-cloud.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DownloadCloud {...props} ref={ref} />);
});

// export default () => <DownloadCloud />;
        