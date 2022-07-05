
import React from 'react';
import Briefcase from '../icons/briefcase.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Briefcase {...props} ref={ref} />);
});

// export default () => <Briefcase />;
        