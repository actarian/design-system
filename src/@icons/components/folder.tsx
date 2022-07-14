
import React from 'react';
import Folder from '../icons/folder.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Folder {...props} ref={ref} />);
});

// export default () => <Folder />;
        