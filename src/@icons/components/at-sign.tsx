
import React from 'react';
import AtSignSvg from '../icons/at-sign.svg';

const AtSign = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AtSignSvg {...props} ref={ref} />);
});

AtSign.displayName = 'AtSign';

export default AtSign;

// export default () => <AtSign />;
        