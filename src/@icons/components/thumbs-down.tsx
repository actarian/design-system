
import React from 'react';
import ThumbsDownSvg from '../icons/thumbs-down.svg';

const ThumbsDown = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThumbsDownSvg {...props} ref={ref} />);
});

ThumbsDown.displayName = 'ThumbsDown';

export default ThumbsDown;

// export default () => <ThumbsDown />;
        