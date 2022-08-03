
import React from 'react';
import VoicemailSvg from '../icons/voicemail.svg';

const Voicemail = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VoicemailSvg {...props} ref={ref} />);
});

Voicemail.displayName = 'Voicemail';

export default Voicemail;

// export default () => <Voicemail />;
        