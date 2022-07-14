
import React from 'react';
import Printer from '../icons/printer.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Printer {...props} ref={ref} />);
});

// export default () => <Printer />;
        