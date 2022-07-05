
import React from 'react';
import Anchor from '../icons/anchor.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Anchor {...props} ref={ref} />);
});

// export default () => <Anchor />;
        