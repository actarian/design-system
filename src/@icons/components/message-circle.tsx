
import React from 'react';
import MessageCircleSvg from '../icons/message-circle.svg';

const MessageCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MessageCircleSvg {...props} ref={ref} />);
});

MessageCircle.displayName = 'MessageCircle';

export default MessageCircle;

// export default () => <MessageCircle />;
        