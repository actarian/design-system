
import React from 'react';
import EditSvg from '../icons/edit.svg';

const Edit = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EditSvg {...props} ref={ref} />);
});

Edit.displayName = 'Edit';

export default Edit;

// export default () => <Edit />;
        