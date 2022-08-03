
import React from 'react';
import DatabaseSvg from '../icons/database.svg';

const Database = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DatabaseSvg {...props} ref={ref} />);
});

Database.displayName = 'Database';

export default Database;

// export default () => <Database />;
        