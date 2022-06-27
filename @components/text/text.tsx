import { ComponentBoxAttrs, setClass } from '@components/types';
import styled from 'styled-components';

export type TextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'default' | 'small' | 'smaller' | 'smallest';

const fontSizes = {
  h1: '60px',
  h2: '52px',
  h3: '44px',
  h4: '36px',
  h5: '28px',
  h6: '20px',
  'default': '16px',
  small: '14px',
  smaller: '12px',
  smallest: '10px',
}

type Props = {
  type?: TextTypes;
}

export type TextProps = ComponentBoxAttrs<Props, HTMLDivElement>;

/* const Text = styled.div<TextProps>` */
const Text = styled.div.attrs(setClass<TextProps>('text'))`
  font-size: ${props => fontSizes[props.type || 'default']};
  margin-bottom: 0.4em;
`;

export default Text;
