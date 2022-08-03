
import React from 'react';
import TableSvg from '../icons/table.svg';

const Table = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TableSvg {...props} ref={ref} />);
});

Table.displayName = 'Table';

export default Table;

// export default () => <Table />;
        