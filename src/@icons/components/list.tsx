
import React from 'react';
import ListSvg from '../icons/list.svg';

const List = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ListSvg {...props} ref={ref} />);
});

List.displayName = 'List';

export default List;

// export default () => <List />;
        