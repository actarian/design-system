
import React from 'react';
import MessageCircle from '../icons/message-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MessageCircle {...props} ref={ref} />);
});

// export default () => <MessageCircle />;
        