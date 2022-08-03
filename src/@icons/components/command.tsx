
import React from 'react';
import CommandSvg from '../icons/command.svg';

const Command = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CommandSvg {...props} ref={ref} />);
});

Command.displayName = 'Command';

export default Command;

// export default () => <Command />;
        