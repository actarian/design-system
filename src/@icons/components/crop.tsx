
import React from 'react';
import CropSvg from '../icons/crop.svg';

const Crop = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CropSvg {...props} ref={ref} />);
});

Crop.displayName = 'Crop';

export default Crop;

// export default () => <Crop />;
        