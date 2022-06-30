import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

export type TextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'default' | 'small' | 'smaller' | 'smallest';

const fontFamily = {
  h1: 'var(--font-primary)',
  h2: 'var(--font-primary)',
  h3: 'var(--font-primary)',
  h4: 'var(--font-primary)',
  h5: 'var(--font-primary)',
  h6: 'var(--font-primary)',
  h7: 'var(--font-primary)',
  h8: 'var(--font-primary)',
  'default': 'var(--font-primary)',
  small: 'var(--font-primary)',
  smaller: 'var(--font-primary)',
  smallest: 'var(--font-primary)',
}

const fontSize = {
  h1: '6.25rem',
  h2: '4.5rem',
  h3: '2.75rem',
  h4: '2.5rem',
  h5: '2.25rem',
  h6: '1.875rem',
  h7: '1.5rem',
  h8: '1.125rem',
  'default': '1rem',
  small: '0.75rem',
  smaller: '0.563rem',
  smallest: '0.422rem',
}

const fontWeight = {
  h1: '700',
  h2: '700',
  h3: '700',
  h4: '700',
  h5: '700',
  h6: '700',
  h7: '400',
  h8: '400',
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
  h7: '1.5',
  h8: '1.625',
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
  h7: '8px',
  h8: '8px',
  'default': '8px',
  small: '8px',
  smaller: '8px',
  smallest: '8px',
}

type Props = {
  type?: TextTypes;
  chars?: number;
}

export type TextProps = ComponentBoxAttrs<Props, HTMLDivElement>;

const Text = styled.div<TextProps>`
  font-family: ${props => fontFamily[props.type || 'default']};
  font-size: ${props => fontSize[props.type || 'default']};
  font-weight: ${props => fontWeight[props.type || 'default']};
  line-height: ${props => lineHeight[props.type || 'default']};
  /*
  &:not(:last-child) {
    margin-bottom: ${props => marginBottom[props.type || 'default']};
  }
  */
  ${props => getSize(props)}
  ${props => getMargin(props, { marginBottom: '8px' } )}
  ${props => getPadding(props)}
  ${props => props.chars ? `max-width: ${props.chars}ch;` : ''}
`;

export default Text;
