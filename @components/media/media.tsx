import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize } from '@components/utils';
import styled, { css } from 'styled-components';

type Props = {
  aspect?: number;
  overlay?: boolean;
}

export type MediaProps = ComponentBoxAttrs<Props, HTMLDivElement>;

const Media = styled.div<MediaProps>`
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}

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

  ${props => props.aspect ? css`
      position: relative;
      width: 100%;
      padding-top: ${100 / props.aspect}%;
      overflow: hidden;

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
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 15.9%, rgba(0, 0, 0, 0) 41.67%, rgba(0, 0, 0, 0.1) 61.79%, rgba(0, 0, 0, 0.5) 100%)
      }
    `: ''}
`;

export default Media;
