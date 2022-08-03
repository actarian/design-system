
import React from 'react';
import BriefcaseSvg from '../icons/briefcase.svg';

const Briefcase = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BriefcaseSvg {...props} ref={ref} />);
});

Briefcase.displayName = 'Briefcase';

export default Briefcase;

// export default () => <Briefcase />;
        