
import React from 'react';
import SaveSvg from '../icons/save.svg';

const Save = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SaveSvg {...props} ref={ref} />);
});

Save.displayName = 'Save';

export default Save;

// export default () => <Save />;
        