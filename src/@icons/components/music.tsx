
import React from 'react';
import MusicSvg from '../icons/music.svg';

const Music = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MusicSvg {...props} ref={ref} />);
});

Music.displayName = 'Music';

export default Music;

// export default () => <Music />;
        