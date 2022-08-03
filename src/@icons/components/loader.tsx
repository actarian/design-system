
import React from 'react';
import LoaderSvg from '../icons/loader.svg';

const Loader = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LoaderSvg {...props} ref={ref} />);
});

Loader.displayName = 'Loader';

export default Loader;

// export default () => <Loader />;
        