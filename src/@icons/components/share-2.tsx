
import React from 'react';
import Share2 from '../icons/share-2.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Share2 {...props} ref={ref} />);
});

// export default () => <Share2 />;
        