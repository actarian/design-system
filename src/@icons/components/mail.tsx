
import React from 'react';
import MailSvg from '../icons/mail.svg';

const Mail = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailSvg {...props} ref={ref} />);
});

Mail.displayName = 'Mail';

export default Mail;

// export default () => <Mail />;
        