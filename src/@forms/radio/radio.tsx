
import { Box } from '@components';
import { ComponentCssResponsiveAttrs } from '@components/types';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
};

export type RadioProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;



const SVG = ({ size = 24, ...props }) =>
  <Box
    as='svg'
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill='currentcolor'
    {...props}
  />

const RadioCheckedSvg = props => (<SVG {...props}>
<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
</SVG>);

const RadioChecked = styled(RadioCheckedSvg)`
  display: 'none';
  input:checked ~ & {
    display: 'block';
  }
`;

const RadioUncheckedSvg = props => (<SVG {...props}>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </SVG>);

const RadioUnchecked = styled(RadioUncheckedSvg)`
  display: 'block';
  input:checked ~ & {
    display: 'none';
  }
`;

const RadioIcon = props =>
<>
  <RadioChecked {...props} />
  <RadioUnchecked {...props} />
</>

const StyledRadio = styled(Box)`
  position: absolute;
  opacity: 0;
  width: 1;
  height: 1;
  overflow: hidden;
  z-index: -1;
`

const StyledRadioIcon = styled(Box)`
  margin-right: 1rem;
  border-radius: 9999;
  color: gray;
  input:checked ~ & {
    color: var(--color-primary-500);
  }
  input:focus ~ & {
    background-color: var(--color-primary-200);
  }
`

const Radio = forwardRef<any, RadioProps>(({
className,
// variant = 'radio',
...props
}, ref) => (
<Box>
  <StyledRadio ref={ref} as='input' type='radio' {...props} />
  <StyledRadioIcon as={RadioIcon} aria-hidden='true' className={className} />
</Box>
))

export default Radio;
