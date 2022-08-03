
import React from 'react';
import ItalicSvg from '../icons/italic.svg';

const Italic = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ItalicSvg {...props} ref={ref} />);
});

Italic.displayName = 'Italic';

export default Italic;

// export default () => <Italic />;
        