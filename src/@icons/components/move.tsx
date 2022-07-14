
import React from 'react';
import Move from '../icons/move.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Move {...props} ref={ref} />);
});

// export default () => <Move />;
        