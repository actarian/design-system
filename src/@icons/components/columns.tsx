
import React from 'react';
import ColumnsSvg from '../icons/columns.svg';

const Columns = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ColumnsSvg {...props} ref={ref} />);
});

Columns.displayName = 'Columns';

export default Columns;

// export default () => <Columns />;
        