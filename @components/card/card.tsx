import { Background } from '@components/background/background';
import { ComponentCssResponsiveAttrs, Variant, Variants } from '@components/types';
import { getAspectResponsive, getCssResponsive, getVariant, hasChildOfType } from '@components/utils';
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
  // background: var(--color-neutral-900);
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
  bordered?: boolean;
};

export type CardProps = ComponentCssResponsiveAttrs<Props, HTMLDivElement>;

const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // margin: 0 0 40px 0;

  ${props => getVariant(variants, props.type)}
  ${props => getCssResponsive(props)}
  ${props => getAspectResponsive(props)};

  ${props => hasBackground(props) ? css`
    color: var(--color-neutral-100);
    position: relative;

    &>:not(.background) {
      position: relative;
    }
  `: ''}
`;

  /*
  ${props => props.aspect ? css`
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
  */

  /*
  ${props => props.background ? css`
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
  */

const Card = (props: CardProps) => {
  return (
    <CardContainer {...props}>
      {props.children}
    </CardContainer>
  );
}

(Card as ICard).Background = Background;
(Card as ICard).Content = CardContent;
(Card as ICard).Footer = CardFooter;

export default Card as ICard;

type ICard = typeof Card & {
  Background: typeof Background;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
};

function hasBackground(props: CardProps):boolean {
  return hasChildOfType(props.children, Background);
}
