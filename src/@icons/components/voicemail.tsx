
import React from 'react';
import Voicemail from '../icons/voicemail.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Voicemail {...props} ref={ref} />);
});

// export default () => <Voicemail />;
        