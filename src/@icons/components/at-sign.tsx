
import React from 'react';
import AtSign from '../icons/at-sign.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AtSign {...props} ref={ref} />);
});

// export default () => <AtSign />;
        