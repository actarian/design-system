
import React from 'react';
import HelpCircleSvg from '../icons/help-circle.svg';

const HelpCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HelpCircleSvg {...props} ref={ref} />);
});

HelpCircle.displayName = 'HelpCircle';

export default HelpCircle;

// export default () => <HelpCircle />;
        