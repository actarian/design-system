import { ComponentBoxAttrs } from '@components/types';
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
  h1: '300',
  h2: '400',
  h3: '500',
  h4: '600',
  h5: '700',
  h6: '800',
  'default': '400',
  small: '500',
  smaller: '500',
  smallest: '600',
}

const lineHeight = {
  h1: '0.9',
  h2: '1.0',
  h3: '1.1',
  h4: '1.2',
  h5: '1.3',
  h6: '1.4',
  'default': '1.5',
  small: '1.6',
  smaller: '1.7',
  smallest: '1.8',
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

const Text = styled.div<TextProps>`
  font-family: ${props => fontFamily[props.type || 'default']};
  font-size: ${props => fontSize[props.type || 'default']};
  font-weight: ${props => fontWeight[props.type || 'default']};
  line-height: ${props => lineHeight[props.type || 'default']};
  &:not(:last-child) {
    margin-bottom: ${props => marginBottom[props.type || 'default']};
  }
  max-width: 30ch;
`;

export default Text;
