
import React from 'react';
import File from '../icons/file.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<File {...props} ref={ref} />);
});

// export default () => <File />;
        