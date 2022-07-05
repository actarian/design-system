
import React from 'react';
import AlignLeft from '../icons/align-left.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignLeft {...props} ref={ref} />);
});

// export default () => <AlignLeft />;
        