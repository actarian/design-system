
import React from 'react';
import Slack from '../icons/slack.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Slack {...props} ref={ref} />);
});

// export default () => <Slack />;
        