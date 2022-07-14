
import React from 'react';
import Rss from '../icons/rss.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Rss {...props} ref={ref} />);
});

// export default () => <Rss />;
        