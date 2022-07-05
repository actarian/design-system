
import React from 'react';
import AlignRight from '../icons/align-right.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignRight {...props} ref={ref} />);
});

// export default () => <AlignRight />;
        