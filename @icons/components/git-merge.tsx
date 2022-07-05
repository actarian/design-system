
import React from 'react';
import GitMerge from '../icons/git-merge.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GitMerge {...props} ref={ref} />);
});

// export default () => <GitMerge />;
        