import { ComponentCssResponsiveAttrs } from '@components/types';
import { getCssResponsive } from '@components/utils';
import styled, { css } from 'styled-components';

type Props = {
  aspect?: number;
  circle?: boolean;
  overlay?: boolean;
}

export type MediaProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const Media = styled.div<MediaProps>`
  ${props => getCssResponsive(props)}

  display: flex;
  justify-content: center;
  align-items: center;

  &>img,
  &>video,
  &>iframe,
  &>canvas,
  &>svg {
    object-fit: cover;
    width: 100%;
  }

  ${props => (props.circle || props.aspect) ? css`
      position: relative;
      overflow: hidden;
      ${props.circle && css`
      border-radius: 50%;
      `}
      ${props.aspect && css`
      width: 100%;
      padding-top: ${100 / props.aspect}%;
      `}
      &>img,
      &>video,
      &>iframe,
      &>canvas,
      &>svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    ` : ''};
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
