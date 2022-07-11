import { ComponentCssResponsiveAttrs } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  aspect?: number;
  background?: ReactNode;
}

export type SectionProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const SectionContainer = styled.div<SectionProps>`
  background: var(--color-alternative-200);
  color: var(--color-neutral-900);
  padding: 64px 0;
  ${props => getCssResponsive(props)}

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

