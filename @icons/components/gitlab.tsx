
import React from 'react';
import Gitlab from '../icons/gitlab.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Gitlab {...props} ref={ref} />);
});

// export default () => <Gitlab />;
        