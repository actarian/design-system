
import React from 'react';
import ActivitySvg from '../icons/activity.svg';

const Activity = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ActivitySvg {...props} ref={ref} />);
});

Activity.displayName = 'Activity';

export default Activity;

// export default () => <Activity />;
        