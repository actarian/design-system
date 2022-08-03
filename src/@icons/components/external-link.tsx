
import React from 'react';
import ExternalLinkSvg from '../icons/external-link.svg';

const ExternalLink = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ExternalLinkSvg {...props} ref={ref} />);
});

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;

// export default () => <ExternalLink />;
        