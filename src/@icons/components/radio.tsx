
import React from 'react';
import RadioSvg from '../icons/radio.svg';

const Radio = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RadioSvg {...props} ref={ref} />);
});

Radio.displayName = 'Radio';

export default Radio;

// export default () => <Radio />;
        