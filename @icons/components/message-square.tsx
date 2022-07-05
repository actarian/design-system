
import React from 'react';
import MessageSquare from '../icons/message-square.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MessageSquare {...props} ref={ref} />);
});

// export default () => <MessageSquare />;
        