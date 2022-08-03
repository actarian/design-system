
import React from 'react';
import BookOpenSvg from '../icons/book-open.svg';

const BookOpen = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BookOpenSvg {...props} ref={ref} />);
});

BookOpen.displayName = 'BookOpen';

export default BookOpen;

// export default () => <BookOpen />;
        