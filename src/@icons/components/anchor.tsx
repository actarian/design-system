
import React from 'react';
import AnchorSvg from '../icons/anchor.svg';

const Anchor = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AnchorSvg {...props} ref={ref} />);
});

Anchor.displayName = 'Anchor';

export default Anchor;

// export default () => <Anchor />;
        