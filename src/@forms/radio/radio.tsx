
import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styled from 'styled-components';
import { RadioIcon } from './radio-icon';

interface Props extends ComponentPropsWithRef<'input'> {
};

export type RadioProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const StyledRadioInput = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

const StyledRadioIcon = styled.div`
  border-radius: 50%;
  margin-right: 0.5rem;
  color: var(--color-neutral-300);
  pointer-events: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline-color 150ms ease-in 0s, color 200ms ease-out 0s;

  input:checked ~ & {
    color: var(--color-primary-500);
  }

  input:not(:disabled):hover ~ & {
    outline-color: var(--color-neutral-300);
  }

  input:focus ~ & {
    outline-color: var(--color-primary-100);
  }
`

const StyledRadio = styled.div`
  position: relative;
  ${props => getCssResponsive(props)}
`

// // variant = 'radio',
const Radio = forwardRef<HTMLInputElement, RadioProps>(({ className, ...props }, ref) => (
  <StyledRadio>
    <StyledRadioInput ref={ref} as='input' type='radio' {...props} />
    <StyledRadioIcon as={RadioIcon} aria-hidden='true' className={className} />
  </StyledRadio>
));

export default Radio;
