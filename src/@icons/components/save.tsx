
import React from 'react';
import Save from '../icons/save.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Save {...props} ref={ref} />);
});

// export default () => <Save />;
        