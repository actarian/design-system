import { ComponentAttrs, ComponentCssResponsiveAttrs, Variant, Variants } from '@components/types';
import { getCssResponsive, getVariant } from '@components/utils';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { CardContent } from './card-content';
import { CardFooter } from './card-footer';

const variants: Variants = {
  default: css`
`,
  alfa: css`
  border: 1px solid var(--color-neutral-100);
  border-radius: 0.5em;
  // box-shadow: var(--card-shadow);
`,
  beta: css`
  background: var(--color-neutral-900);
  border-radius: 2px;
`,
  gamma: css`
  border: 1px solid var(--color-neutral-100);
  border-radius: 20px;
  box-shadow: var(--card-shadow);
`,
  delta: css`
  border: 1px solid var(--color-neutral-100);
  border-radius: 20px;
  box-shadow: var(--card-shadow);
`
};

type Props = {
  type?: Variant;
  aspect?: number;
  background?: ReactNode;
  justifyContent?: string;
  bordered?: boolean;
}

export type CardProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 0 40px 0;

  ${props => getVariant(variants, props.type)}
  ${props => getCssResponsive(props)}

  ${props => props.background ? css`
    position: relative;
    color: var(--color-neutral-100);

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

type InnerProps = {
  aspect?: number;
}

export type CardInnerProps = ComponentAttrs<InnerProps, HTMLDivElement>;

const CardInner = styled.div<CardInnerProps>`
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

const Card = (props: CardProps) => {
  return (
    <CardContainer {...props}>
      {props.background && props.background}
      <CardInner {...props}>
        {props.children}
      </CardInner>
    </CardContainer>
  );
}

(Card as ICard).Content = CardContent;
(Card as ICard).Footer = CardFooter;

export default Card as ICard;

type ICard = typeof Card & {
  Content: typeof CardContent;
  Footer: typeof CardFooter;
};
