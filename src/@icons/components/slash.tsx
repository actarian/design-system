
import React from 'react';
import SlashSvg from '../icons/slash.svg';

const Slash = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SlashSvg {...props} ref={ref} />);
});

Slash.displayName = 'Slash';

export default Slash;

// export default () => <Slash />;
        