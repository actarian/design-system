
import React from 'react';
import MousePointer from '../icons/mouse-pointer.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MousePointer {...props} ref={ref} />);
});

// export default () => <MousePointer />;
        