
import React from 'react';
import TypeSvg from '../icons/type.svg';

const Type = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TypeSvg {...props} ref={ref} />);
});

Type.displayName = 'Type';

export default Type;

// export default () => <Type />;
        