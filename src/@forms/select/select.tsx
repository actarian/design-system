import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { ComponentPropsWithRef, forwardRef, SVGProps } from 'react';
import styled from 'styled-components';

interface Props extends ComponentPropsWithRef<'select'> {
};

export type SelectProps = ComponentCssResponsiveProps<Props, HTMLSelectElement>;

const DownArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const DownArrow = styled(DownArrowSvg)`
  width: 24px;
  height: 24px;
  margin-left: -2.8rem;
  align-self: center;
  pointer-events: none;
`;

const StyledSelectSelect = styled.div`
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
  ${props => getCssResponsive(props)}
`;

const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  ${props => getCssResponsive(props)}
`

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <StyledSelect>
    <StyledSelectSelect ref={ref} as='select' {...props} />
    <DownArrow />
  </StyledSelect>
));

/*
<DownArrow
      sx={{
        ml: -28,
        alignSelf: 'center',
        pointerEvents: 'none',
      }}
      */

export default Select;

