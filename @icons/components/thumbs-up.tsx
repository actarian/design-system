
import React from 'react';
import ThumbsUp from '../icons/thumbs-up.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ThumbsUp {...props} ref={ref} />);
});

// export default () => <ThumbsUp />;
        