
import React from 'react';
import TrashSvg from '../icons/trash.svg';

const Trash = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TrashSvg {...props} ref={ref} />);
});

Trash.displayName = 'Trash';

export default Trash;

// export default () => <Trash />;
        