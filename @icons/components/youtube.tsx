
import React from 'react';
import Youtube from '../icons/youtube.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Youtube {...props} ref={ref} />);
});

// export default () => <Youtube />;
        