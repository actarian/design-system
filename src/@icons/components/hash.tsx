
import React from 'react';
import HashSvg from '../icons/hash.svg';

const Hash = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HashSvg {...props} ref={ref} />);
});

Hash.displayName = 'Hash';

export default Hash;

// export default () => <Hash />;
        