import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize, setClass } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type HeroProps = ComponentBoxAttrs<Props, HTMLDivElement>;

/* const Hero = styled.div<HeroProps>` */
const Hero = styled.div.attrs(setClass<HeroProps>('hero'))`
  background: var(--color-alternative-100);
  color: var(--color-neutral-900);
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props, { padding: '64px 0' })}
`;

export default Hero;

