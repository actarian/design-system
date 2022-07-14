
import React from 'react';
import HelpCircle from '../icons/help-circle.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HelpCircle {...props} ref={ref} />);
});

// export default () => <HelpCircle />;
        