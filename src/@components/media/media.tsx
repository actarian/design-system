import { ComponentCssResponsiveProps } from '@components/types';
import { getAspectResponsive, getCssResponsive } from '@components/utils';
import styled, { css } from 'styled-components';

type Props = {
  circle?: boolean;
  overlay?: boolean;
};

export type MediaProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Media = styled.div<MediaProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: var(--color-neutral-900);
  // color: var(--color-neutral-100);

  ${props => getCssResponsive(props)}

  &>* {
    object-fit: cover;
    width: 100%;
  }

  ${props => props.circle ? css`
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 50%;
      &>* {
        top: 0;
        left: 0;
        height: 100%;
      }
    ` : ''};

  ${props => getAspectResponsive(props, props.circle ? { aspectRatio: 1 } : undefined)};

  ${props => props.overlay ? css`
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 15.9%, rgba(0, 0, 0, 0) 41.67%, rgba(0, 0, 0, 0.1) 61.79%, rgba(0, 0, 0, 0.6) 100%)
    }
  `: ''}
`;

export default Media;

Media.defaultProps = {
  className: 'media',
};
