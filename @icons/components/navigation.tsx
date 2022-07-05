
import React from 'react';
import Navigation from '../icons/navigation.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Navigation {...props} ref={ref} />);
});

// export default () => <Navigation />;
        