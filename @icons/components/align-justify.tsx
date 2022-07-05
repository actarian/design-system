
import React from 'react';
import AlignJustify from '../icons/align-justify.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignJustify {...props} ref={ref} />);
});

// export default () => <AlignJustify />;
        