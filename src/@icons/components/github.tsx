
import React from 'react';
import Github from '../icons/github.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Github {...props} ref={ref} />);
});

// export default () => <Github />;
        