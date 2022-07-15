import { Box } from '@components';
import { ComponentCssResponsiveAttrs } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
}

export type InputProps = ComponentCssResponsiveAttrs<Props, HTMLInputElement>;

const StyledInput = styled(Box)`
  display: block;
  width: 100%;
  padding: 1rem;
  appearance: none;
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  border: 2px solid;
  border-radius: var(--border-radius);
  color: inherit;
  background-color: transparent;
  border-color: var(--color-neutral-200);

  &::placeholder {
    color: inherit;
    opacity: 0.3;
  }

  &:focus-visible {
    outline: 2px solid var(--color-neutral-400);

    &::placeholder {
      opacity: 0.5;
    }
  }
`;

const Input = forwardRef<any, InputProps>((props, ref) => (
  <StyledInput ref={ref} as='input' type='text' {...props} />
));

export default Input;
