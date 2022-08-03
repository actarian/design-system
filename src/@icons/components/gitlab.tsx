
import React from 'react';
import GitlabSvg from '../icons/gitlab.svg';

const Gitlab = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitlabSvg {...props} ref={ref} />);
});

Gitlab.displayName = 'Gitlab';

export default Gitlab;

// export default () => <Gitlab />;
        