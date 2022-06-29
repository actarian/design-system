import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize } from '@components/utils';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  aspect?: number;
  background?: ReactNode;
}

export type SectionProps = ComponentBoxAttrs<Props, HTMLDivElement>;

const SectionContainer = styled.div<SectionProps>`
  background: var(--color-alternative-100);
  color: var(--color-neutral-900);
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props, { padding: '64px 0' })}

  ${props => props.background ? css`
    position: relative;

    &>:first-child {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &>img,
      &>video,
      &>canvas,
      &>iframe {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  `: ''}

  ${props => props.aspect ? css`
    position: relative;
    width: 100%;
    padding-top: ${100 / props.aspect}%;
    overflow: hidden;

    &>div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  ` : ''};
`;

const Section = (props: SectionProps) => {
  return (
    <SectionContainer {...props}>
      {props.background && props.background}
      {props.children}
    </SectionContainer>
  );
}

export default Section;

