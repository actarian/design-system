
import React from 'react';
import SendSvg from '../icons/send.svg';

const Send = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SendSvg {...props} ref={ref} />);
});

Send.displayName = 'Send';

export default Send;

// export default () => <Send />;
        