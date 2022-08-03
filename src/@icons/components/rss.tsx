
import React from 'react';
import RssSvg from '../icons/rss.svg';

const Rss = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RssSvg {...props} ref={ref} />);
});

Rss.displayName = 'Rss';

export default Rss;

// export default () => <Rss />;
        