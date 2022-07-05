
import React from 'react';
import BookOpen from '../icons/book-open.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BookOpen {...props} ref={ref} />);
});

// export default () => <BookOpen />;
        