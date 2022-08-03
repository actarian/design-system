
import React from 'react';
import MoveSvg from '../icons/move.svg';

const Move = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MoveSvg {...props} ref={ref} />);
});

Move.displayName = 'Move';

export default Move;

// export default () => <Move />;
        