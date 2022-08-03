
import React from 'react';
import ImageSvg from '../icons/image.svg';

const Image = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ImageSvg {...props} ref={ref} />);
});

Image.displayName = 'Image';

export default Image;

// export default () => <Image />;
        