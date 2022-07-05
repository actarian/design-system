
import React from 'react';
import UploadCloud from '../icons/upload-cloud.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UploadCloud {...props} ref={ref} />);
});

// export default () => <UploadCloud />;
        