import { ComponentAttrs, setClass } from '@components/types';
import styled from 'styled-components';

type Props = {
}

export type HeroProps = ComponentAttrs<Props, HTMLDivElement>;

/* const Hero = styled.div<HeroProps>` */
const Hero = styled.div.attrs(setClass<HeroProps>('hero'))`
  background: #eee;
  min-height: 60vh;
`;

export default Hero;

