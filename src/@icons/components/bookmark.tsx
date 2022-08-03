
import React from 'react';
import BookmarkSvg from '../icons/bookmark.svg';

const Bookmark = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BookmarkSvg {...props} ref={ref} />);
});

Bookmark.displayName = 'Bookmark';

export default Bookmark;

// export default () => <Bookmark />;
        