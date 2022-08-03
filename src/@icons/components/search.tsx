
import React from 'react';
import SearchSvg from '../icons/search.svg';

const Search = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SearchSvg {...props} ref={ref} />);
});

Search.displayName = 'Search';

export default Search;

// export default () => <Search />;
        