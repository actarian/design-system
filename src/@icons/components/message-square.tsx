
import React from 'react';
import MessageSquareSvg from '../icons/message-square.svg';

const MessageSquare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MessageSquareSvg {...props} ref={ref} />);
});

MessageSquare.displayName = 'MessageSquare';

export default MessageSquare;

// export default () => <MessageSquare />;
        