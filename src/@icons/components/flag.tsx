
import React from 'react';
import FlagSvg from '../icons/flag.svg';

const Flag = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlagSvg {...props} ref={ref} />);
});

Flag.displayName = 'Flag';

export default Flag;

// export default () => <Flag />;
        