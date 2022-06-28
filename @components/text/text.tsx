import { ComponentBoxAttrs } from '@components/types';
import { setClass } from '@components/utils';
import styled from 'styled-components';

export type TextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'default' | 'small' | 'smaller' | 'smallest';

const fontFamily = {
  h1: 'var(--font-primary)',
  h2: 'var(--font-primary)',
  h3: 'var(--font-primary)',
  h4: 'var(--font-primary)',
  h5: 'var(--font-primary)',
  h6: 'var(--font-primary)',
  'default': 'var(--font-primary)',
  small: 'var(--font-primary)',
  smaller: 'var(--font-primary)',
  smallest: 'var(--font-primary)',
}

const fontSize = {
  h1: '5.61rem',
  h2: '4.209rem',
  h3: '3.157rem',
  h4: '2.369rem',
  h5: '1.777rem',
  h6: '1.333rem',
  'default': '1rem',
  small: '0.75rem',
  smaller: '0.563rem',
  smallest: '0.422rem',
}

const fontWeight = {
  h1: '100',
  h2: '200',
  h3: '300',
  h4: '400',
  h5: '500',
  h6: '600',
  'default': '400',
  small: '500',
  smaller: '500',
  smallest: '600',
}

const lineHeight = {
  h1: '1.0',
  h2: '1.1',
  h3: '1.2',
  h4: '1.3',
  h5: '1.4',
  h6: '1.5',
  'default': '1.6',
  small: '1.7',
  smaller: '1.8',
  smallest: '1.9',
}

const marginBottom = {
  h1: '8px',
  h2: '8px',
  h3: '8px',
  h4: '8px',
  h5: '8px',
  h6: '8px',
  'default': '8px',
  small: '8px',
  smaller: '8px',
  smallest: '8px',
}

type Props = {
  type?: TextTypes;
}

export type TextProps = ComponentBoxAttrs<Props, HTMLDivElement>;

/* const Text = styled.div<TextProps>` */
const Text = styled.div.attrs(setClass<TextProps>('text'))`
  font-family: ${props => fontFamily[props.type || 'default']};
  font-size: ${props => fontSize[props.type || 'default']};
  font-weight: ${props => fontWeight[props.type || 'default']};
  line-height: ${props => lineHeight[props.type || 'default']};
  margin-bottom: ${props => marginBottom[props.type || 'default']};
`;

export default Text;
