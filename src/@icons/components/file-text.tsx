
import React from 'react';
import FileText from '../icons/file-text.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FileText {...props} ref={ref} />);
});

// export default () => <FileText />;
        