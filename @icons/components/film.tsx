
import React from 'react';
import Film from '../icons/film.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Film {...props} ref={ref} />);
});

// export default () => <Film />;
        