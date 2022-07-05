
import React from 'react';
import Key from '../icons/key.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Key {...props} ref={ref} />);
});

// export default () => <Key />;
        