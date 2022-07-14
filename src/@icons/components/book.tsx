
import React from 'react';
import Book from '../icons/book.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Book {...props} ref={ref} />);
});

// export default () => <Book />;
        