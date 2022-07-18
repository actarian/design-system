import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type BackgroundProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Background = styled.div<BackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;

  &, & > * {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > * > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${props => getCssResponsive(props)}
`;

Background.defaultProps = {
  className: 'background',
};

export default Background;
