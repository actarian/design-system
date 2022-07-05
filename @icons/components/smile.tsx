
import React from 'react';
import Smile from '../icons/smile.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Smile {...props} ref={ref} />);
});

// export default () => <Smile />;
        