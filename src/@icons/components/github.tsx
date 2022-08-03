
import React from 'react';
import GithubSvg from '../icons/github.svg';

const Github = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GithubSvg {...props} ref={ref} />);
});

Github.displayName = 'Github';

export default Github;

// export default () => <Github />;
        