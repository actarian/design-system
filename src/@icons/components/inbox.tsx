
import React from 'react';
import Inbox from '../icons/inbox.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Inbox {...props} ref={ref} />);
});

// export default () => <Inbox />;
        