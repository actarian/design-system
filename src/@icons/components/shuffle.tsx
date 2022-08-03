
import React from 'react';
import ShuffleSvg from '../icons/shuffle.svg';

const Shuffle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ShuffleSvg {...props} ref={ref} />);
});

Shuffle.displayName = 'Shuffle';

export default Shuffle;

// export default () => <Shuffle />;
        