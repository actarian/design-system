
import React from 'react';
import ShareSvg from '../icons/share.svg';

const Share = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShareSvg {...props} ref={ref} />);
});

Share.displayName = 'Share';

export default Share;

// export default () => <Share />;
        