
import React from 'react';
import InfoSvg from '../icons/info.svg';

const Info = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<InfoSvg {...props} ref={ref} />);
});

Info.displayName = 'Info';

export default Info;

// export default () => <Info />;
        