
import React from 'react';
import Share2Svg from '../icons/share-2.svg';

const Share2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Share2Svg {...props} ref={ref} />);
});

Share2.displayName = 'Share2';

export default Share2;

// export default () => <Share2 />;
        