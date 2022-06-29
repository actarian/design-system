import { ComponentAttrs, ComponentBoxAttrs, Variant } from '@components/types';
import { getMargin, getPadding, getSize } from '@components/utils';
import { ReactNode } from 'react';
import styled, { css, FlattenInterpolation } from 'styled-components';
import { CardContent } from './card-content';
import { CardFooter } from './card-footer';

const Variants: { [key in Variant]?: FlattenInterpolation<any> } = {
  beta: css`
  border: 1px solid #ddd;
  border-radius: 0.5em;
  // box-shadow: 0 20px 20px -10px rgba(0,0,0,0.2);
`,
  gamma: css`
  background: #111;
  border-radius: 2px;
`,
  delta: css`
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 0 20px 20px -10px rgba(0,0,0,0.2);
`,
  epsilon: css`
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 0 20px 20px -10px rgba(0,0,0,0.2);
`
};

const getVariant = (type: Variant = 'alfa') => {
  return Variants[type] ? Variants[type] : '';
}

type Props = {
  type?: Variant;
  aspect?: number;
  background?: ReactNode;

  justifyContent?: string;

  shadow?: boolean;
  rounded?: boolean;
  bordered?: boolean;
}

export type CardProps = ComponentBoxAttrs<Props, HTMLDivElement>;

const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  ${props => getVariant(props.type)}
  ${props => getSize(props)}
  ${props => getMargin(props, { margin: '0 0 40px 0' })}
  ${props => getPadding(props)}

  ${props => props.justifyContent ? css`
    justify-content: ${props.justifyContent};
  `: ''}

  ${props => props.bordered ? css`
    border: 1px solid #eee;
  `: ''}

  ${props => props.rounded ? css`
    border-radius: 20px;
  `: ''}

  ${props => props.shadow ? css`
    box-shadow: 0 20px 20px -10px rgba(0,0,0,0.2);
  `: ''}

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

