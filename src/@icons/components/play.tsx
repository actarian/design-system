
import React from 'react';
import PlaySvg from '../icons/play.svg';

const Play = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlaySvg {...props} ref={ref} />);
});

Play.displayName = 'Play';

export default Play;

// export default () => <Play />;
        