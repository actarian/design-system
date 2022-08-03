
import React from 'react';
import HomeSvg from '../icons/home.svg';

const Home = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HomeSvg {...props} ref={ref} />);
});

Home.displayName = 'Home';

export default Home;

// export default () => <Home />;
        