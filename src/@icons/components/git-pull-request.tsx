
import React from 'react';
import GitPullRequestSvg from '../icons/git-pull-request.svg';

const GitPullRequest = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitPullRequestSvg {...props} ref={ref} />);
});

GitPullRequest.displayName = 'GitPullRequest';

export default GitPullRequest;

// export default () => <GitPullRequest />;
        