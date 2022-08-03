
import React from 'react';
import PrinterSvg from '../icons/printer.svg';

const Printer = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PrinterSvg {...props} ref={ref} />);
});

Printer.displayName = 'Printer';

export default Printer;

// export default () => <Printer />;
        