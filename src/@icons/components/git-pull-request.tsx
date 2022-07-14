
import React from 'react';
import GitPullRequest from '../icons/git-pull-request.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitPullRequest {...props} ref={ref} />);
});

// export default () => <GitPullRequest />;
        