
import React from 'react';
import Tag from '../icons/tag.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Tag {...props} ref={ref} />);
});

// export default () => <Tag />;
        