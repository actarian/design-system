import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize, setClass } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type CardContentProps = ComponentBoxAttrs<Props, HTMLDivElement>;

/* export const CardContent = styled.div<CardContentProps>` */
export const CardContent = styled.div.attrs(setClass<CardContentProps>('card__content'))`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props, { padding: '1em' })}
`;
