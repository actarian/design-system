import { Box } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends ComponentPropsWithRef<'input'> {
};

export type InputProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

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
    outline: 2px solid var(--color-primary-100);
    outline-offset: 2px;

    &::placeholder {
      opacity: 0.5;
    }
  }
`;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <StyledInput ref={ref} as='input' type='text' {...props} />
));

export default Input;
