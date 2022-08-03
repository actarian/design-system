
import React from 'react';
import MenuSvg from '../icons/menu.svg';

const Menu = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MenuSvg {...props} ref={ref} />);
});

Menu.displayName = 'Menu';

export default Menu;

// export default () => <Menu />;
        