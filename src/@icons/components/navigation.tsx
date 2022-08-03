
import React from 'react';
import NavigationSvg from '../icons/navigation.svg';

const Navigation = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<NavigationSvg {...props} ref={ref} />);
});

Navigation.displayName = 'Navigation';

export default Navigation;

// export default () => <Navigation />;
        