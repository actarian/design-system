
import React from 'react';
import ThumbsUpSvg from '../icons/thumbs-up.svg';

const ThumbsUp = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThumbsUpSvg {...props} ref={ref} />);
});

ThumbsUp.displayName = 'ThumbsUp';

export default ThumbsUp;

// export default () => <ThumbsUp />;
        