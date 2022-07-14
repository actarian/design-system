
import React from 'react';
import Upload from '../icons/upload.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Upload {...props} ref={ref} />);
});

// export default () => <Upload />;
        