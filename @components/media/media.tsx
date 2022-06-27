import { ComponentBoxAttrs, getMargin, getPadding, setClass } from '@components/types';
import styled, { css } from 'styled-components';

type Props = {
  aspect?: number;
}

export type MediaProps = ComponentBoxAttrs<Props, HTMLDivElement>;

/* const Media = styled.div<MediaProps>` */
const Media = styled.div.attrs(setClass<MediaProps>('media'))`
${props => getMargin(props)}
${props => getPadding(props)}
${props => props.aspect ? css`
    position: relative;
    width: 100%;
    padding-top: ${100 / props.aspect}%;
    overflow: hidden;

    &>img,
    &>video,
    &>iframe,
    &>canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  ` : ''};
`;

export default Media;
