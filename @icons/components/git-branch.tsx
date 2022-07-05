
import React from 'react';
import GitBranch from '../icons/git-branch.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitBranch {...props} ref={ref} />);
});

// export default () => <GitBranch />;
        