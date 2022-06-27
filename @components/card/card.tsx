import { ComponentAttrs, ComponentBoxAttrs, getMargin, getPadding, setClass } from '@components/types';
import { ReactNode } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { CardContent } from './card-content';
import { CardFooter } from './card-footer';

const CardVariant: { [key in CardTypes]: FlattenSimpleInterpolation } = {
  alpha: css`
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 0 20px 20px -10px rgba(0,0,0,0.2);
`,
  beta: css`
background: #111;
border-radius: 2px;
`,
  gamma: css`
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 0 20px 20px -10px rgba(0,0,0,0.2);
`,
  delta: css`
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 0 20px 20px -10px rgba(0,0,0,0.2);
`
};

export type CardTypes = 'alpha' | 'beta' | 'gamma' | 'delta';

/* const CardContainer = styled.div<CardProps>` */
const CardContainer = styled.div.attrs(setClass<CardProps>('card'))`
  ${props => getMargin(props, { margin: '0 0 40px 0' })}
  ${props => getPadding(props)}

  display: flex;
  flex-direction: column;

  ${props => props.type && CardVariant[props.type] ? CardVariant[props.type] : ''}

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

/* const CardInner = styled.div<CardInnerProps>` */
const CardInner = styled.div.attrs(setClass<CardInnerProps>('card__inner'))`
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

type Props = {
  type?: CardTypes;
  aspect?: number;
  background?: ReactNode;
  shadow?: boolean;
  rounded?: boolean;
  bordered?: boolean;
}

export type CardProps = ComponentBoxAttrs<Props, HTMLDivElement>;

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

