
import React from 'react';
import CodepenSvg from '../icons/codepen.svg';

const Codepen = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CodepenSvg {...props} ref={ref} />);
});

Codepen.displayName = 'Codepen';

export default Codepen;

// export default () => <Codepen />;
        