
import React from 'react';
import TagSvg from '../icons/tag.svg';

const Tag = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TagSvg {...props} ref={ref} />);
});

Tag.displayName = 'Tag';

export default Tag;

// export default () => <Tag />;
        