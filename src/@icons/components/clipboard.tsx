
import React from 'react';
import ClipboardSvg from '../icons/clipboard.svg';

const Clipboard = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClipboardSvg {...props} ref={ref} />);
});

Clipboard.displayName = 'Clipboard';

export default Clipboard;

// export default () => <Clipboard />;
        