
import React from 'react';
import AwardSvg from '../icons/award.svg';

const Award = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AwardSvg {...props} ref={ref} />);
});

Award.displayName = 'Award';

export default Award;

// export default () => <Award />;
        