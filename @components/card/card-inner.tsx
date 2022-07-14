import { ComponentAttrs } from '@components/types';
import styled, { css } from 'styled-components';

type InnerProps = {
  aspect?: number;
}

export type CardInnerProps = ComponentAttrs<InnerProps, HTMLDivElement>;

export const CardInner = styled.div<CardInnerProps>`
  display: flex;
  flex-direction: column;

  ${props => props.aspect ? css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  ` : ''};
`;
