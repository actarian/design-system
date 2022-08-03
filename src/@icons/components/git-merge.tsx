
import React from 'react';
import GitMergeSvg from '../icons/git-merge.svg';

const GitMerge = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitMergeSvg {...props} ref={ref} />);
});

GitMerge.displayName = 'GitMerge';

export default GitMerge;

// export default () => <GitMerge />;
        