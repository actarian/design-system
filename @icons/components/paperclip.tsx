
import React from 'react';
import Paperclip from '../icons/paperclip.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Paperclip {...props} ref={ref} />);
});

// export default () => <Paperclip />;
        