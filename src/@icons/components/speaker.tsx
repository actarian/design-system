
import React from 'react';
import SpeakerSvg from '../icons/speaker.svg';

const Speaker = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SpeakerSvg {...props} ref={ref} />);
});

Speaker.displayName = 'Speaker';

export default Speaker;

// export default () => <Speaker />;
        