
import React from 'react';
import UnderlineSvg from '../icons/underline.svg';

const Underline = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<UnderlineSvg {...props} ref={ref} />);
});

Underline.displayName = 'Underline';

export default Underline;

// export default () => <Underline />;
        