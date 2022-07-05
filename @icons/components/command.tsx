
import React from 'react';
import Command from '../icons/command.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Command {...props} ref={ref} />);
});

// export default () => <Command />;
        