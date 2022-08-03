
import React from 'react';
import TargetSvg from '../icons/target.svg';

const Target = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TargetSvg {...props} ref={ref} />);
});

Target.displayName = 'Target';

export default Target;

// export default () => <Target />;
        