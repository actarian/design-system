
import React from 'react';
import GitCommit from '../icons/git-commit.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitCommit {...props} ref={ref} />);
});

// export default () => <GitCommit />;
        