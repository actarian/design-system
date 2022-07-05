
import React from 'react';
import Mail from '../icons/mail.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Mail {...props} ref={ref} />);
});

// export default () => <Mail />;
        