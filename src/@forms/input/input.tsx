import { Box } from '@components';
import { ComponentCssResponsiveAttrs } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
  fluid?: boolean;
}

export type InputProps = ComponentCssResponsiveAttrs<Props, HTMLInputElement>;

const StyledInput = styled(Box)`
  display: block;
  width: 100%;
  padding: 1rem;
  appearance: none;
  font-size: var(--font-variant-h-8-size);
  line-height: var(--font-variant-h-8-line-height);
  border: 2px solid var(--color-neutral-200);
  border-radius: var(--border-radius);
  color: inherit;
  background-color: transparent;

  &:focus-visible {
    outline: 2px solid var(--color-neutral-400);
    outline-offset: 0.2rem;
  }
`;

const Input = forwardRef<any, InputProps>((props, ref) => (
  <StyledInput ref={ref} as='input' type='text' {...props} />
));

export default Input;
