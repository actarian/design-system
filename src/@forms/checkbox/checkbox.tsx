
import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { ComponentPropsWithRef, forwardRef, SVGProps } from 'react';
import styled from 'styled-components';

interface Props extends ComponentPropsWithRef<'input'> {
};

export type CheckboxProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const CheckboxCheckedSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' fill='currentcolor' {...props}>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const CheckboxUncheckedSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' fill='currentcolor' {...props}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);

const CheckboxChecked = styled(CheckboxCheckedSvg)`
  width: 24px;
  height: 24px;
  display: none;

  input:checked ~ & {
    display: block;
  }
`;

const CheckboxUnchecked = styled(CheckboxUncheckedSvg)`
  width: 24px;
  height: 24px;
  display: block;

  input:checked ~ & {
    display: none;
  }
`;

const CheckboxIcon = (props: SVGProps<SVGSVGElement>) =>
  <>
    <CheckboxChecked {...props} />
    <CheckboxUnchecked {...props} />
  </>

const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const StyledCheckboxIcon = styled.div`
  margin-right: 0.5rem;
  color: var(--color-neutral-300);
  pointer-events: none;

  input:checked ~ & {
    color: var(--color-primary-500);
  }

  input:focus ~ & {
    outline: 2px solid var(--color-primary-100);
    outline-offset: 1px;
  }
`

const StyledCheckbox = styled.div<CheckboxProps>`
  position: relative;
  ${props => getCssResponsive(props)}
`

// // variant = 'radio',
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => (
  <StyledCheckbox>
    <StyledCheckboxInput ref={ref} as='input' type='checkbox' {...props} />
    <StyledCheckboxIcon as={CheckboxIcon} aria-hidden='true' className={className} />
  </StyledCheckbox>
))

export default Checkbox;
