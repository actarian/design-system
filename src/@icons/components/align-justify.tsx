
import React from 'react';
import AlignJustifySvg from '../icons/align-justify.svg';

const AlignJustify = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AlignJustifySvg {...props} ref={ref} />);
});

AlignJustify.displayName = 'AlignJustify';

export default AlignJustify;

// export default () => <AlignJustify />;
        