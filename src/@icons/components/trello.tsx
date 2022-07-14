
import React from 'react';
import Trello from '../icons/trello.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Trello {...props} ref={ref} />);
});

// export default () => <Trello />;
        