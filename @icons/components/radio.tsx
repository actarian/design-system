
import React from 'react';
import Radio from '../icons/radio.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Radio {...props} ref={ref} />);
});

// export default () => <Radio />;
        