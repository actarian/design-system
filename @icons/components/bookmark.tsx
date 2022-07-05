
import React from 'react';
import Bookmark from '../icons/bookmark.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Bookmark {...props} ref={ref} />);
});

// export default () => <Bookmark />;
        