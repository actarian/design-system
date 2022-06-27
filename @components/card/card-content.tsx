import { ComponentBoxAttrs, getMargin, getPadding, setClass } from '@components/types';
import styled from 'styled-components';

type Props = {
}

export type CardContentProps = ComponentBoxAttrs<Props, HTMLDivElement>;

/* export const CardContent = styled.div<CardContentProps>` */
export const CardContent = styled.div.attrs(setClass<CardContentProps>('card__content'))`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${props => getMargin(props)}
  ${props => getPadding(props, { padding: '1em' })}
`;
