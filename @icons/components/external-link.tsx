
import React from 'react';
import ExternalLink from '../icons/external-link.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ExternalLink {...props} ref={ref} />);
});

// export default () => <ExternalLink />;
        