
import React from 'react';
import FilterSvg from '../icons/filter.svg';

const Filter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FilterSvg {...props} ref={ref} />);
});

Filter.displayName = 'Filter';

export default Filter;

// export default () => <Filter />;
        