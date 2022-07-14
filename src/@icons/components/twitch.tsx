
import React from 'react';
import Twitch from '../icons/twitch.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Twitch {...props} ref={ref} />);
});

// export default () => <Twitch />;
        