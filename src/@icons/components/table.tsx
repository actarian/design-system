
import React from 'react';
import Table from '../icons/table.svg';

export default React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Table {...props} ref={ref} />);
});

// export default () => <Table />;
        