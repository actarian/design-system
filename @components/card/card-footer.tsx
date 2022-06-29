import { ComponentBoxAttrs } from '@components/types';
import { getMargin, getPadding, getSize } from '@components/utils';
import styled from 'styled-components';

type Props = {
}

export type CardFooterProps = ComponentBoxAttrs<Props, HTMLDivElement>;

export const CardFooter = styled.div<CardFooterProps>`
  flex: 0 0 4em;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid grey;
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props, { padding: '8px' })}
`;
