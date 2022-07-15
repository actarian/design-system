import { Box } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
}

export type TextAreaProps = ComponentCssResponsiveProps<Props, HTMLTextAreaElement>;

const StyledTextArea = styled(Box)`
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
  resize: vertical;
  min-height: 4rem;

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

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => (
  <StyledTextArea ref={ref} as='textarea' {...props} />
));

export default TextArea;
