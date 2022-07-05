
import React from 'react';
import Cast from '../icons/cast.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Cast {...props} ref={ref} />);
});

// export default () => <Cast />;
        