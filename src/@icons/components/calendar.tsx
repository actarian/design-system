
import React from 'react';
import Calendar from '../icons/calendar.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Calendar {...props} ref={ref} />);
});

// export default () => <Calendar />;
        