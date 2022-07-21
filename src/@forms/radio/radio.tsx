
import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { ComponentPropsWithRef, forwardRef, SVGProps } from 'react';
import styled from 'styled-components';

interface Props extends ComponentPropsWithRef<'input'> {
};

export type RadioProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const RadioCheckedSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' fill='currentcolor' {...props}>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

const RadioUncheckedSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' fill='currentcolor' {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

const RadioChecked = styled(RadioCheckedSvg)`
  width: 24px;
  height: 24px;
  display: none;

  input:checked ~ & {
    display: block;
  }
`;
const RadioUnchecked = styled(RadioUncheckedSvg)`
  width: 24px;
  height: 24px;
  display: block;

  input:checked ~ & {
    display: none;
  }
`;

const RadioIcon = (props: SVGProps<SVGSVGElement>) =>
  <>
    <RadioChecked {...props} />
    <RadioUnchecked {...props} />
  </>

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

  ${props => getCssResponsive(props)}
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
  ${props => getCssResponsive(props)}
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
))

export default Radio;
