
import React from 'react';
import ThumbsDown from '../icons/thumbs-down.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThumbsDown {...props} ref={ref} />);
});

// export default () => <ThumbsDown />;
        