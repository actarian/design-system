
import React from 'react';
import HexagonSvg from '../icons/hexagon.svg';

const Hexagon = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HexagonSvg {...props} ref={ref} />);
});

Hexagon.displayName = 'Hexagon';

export default Hexagon;

// export default () => <Hexagon />;
        