
import React from 'react';
import Database from '../icons/database.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Database {...props} ref={ref} />);
});

// export default () => <Database />;
        