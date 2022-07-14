
import React from 'react';
import X from '../icons/x.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<X {...props} ref={ref} />);
});

// export default () => <X />;
        