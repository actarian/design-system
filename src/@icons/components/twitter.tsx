
import React from 'react';
import TwitterSvg from '../icons/twitter.svg';

const Twitter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TwitterSvg {...props} ref={ref} />);
});

Twitter.displayName = 'Twitter';

export default Twitter;

// export default () => <Twitter />;
        