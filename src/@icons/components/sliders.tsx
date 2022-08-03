
import React from 'react';
import SlidersSvg from '../icons/sliders.svg';

const Sliders = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SlidersSvg {...props} ref={ref} />);
});

Sliders.displayName = 'Sliders';

export default Sliders;

// export default () => <Sliders />;
        