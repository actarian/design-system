
import React from 'react';
import GridSvg from '../icons/grid.svg';

const Grid = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GridSvg {...props} ref={ref} />);
});

Grid.displayName = 'Grid';

export default Grid;

// export default () => <Grid />;
        