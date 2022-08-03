
import React from 'react';
import MousePointerSvg from '../icons/mouse-pointer.svg';

const MousePointer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MousePointerSvg {...props} ref={ref} />);
});

MousePointer.displayName = 'MousePointer';

export default MousePointer;

// export default () => <MousePointer />;
        