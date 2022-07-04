import { ComponentBaseAttrs } from '@components/types';
import { getBase } from '@components/utils';
import styled from 'styled-components';

const Base = styled.div<BaseProps>`
  ${props => getBase(props)}
`;

type Props = {
}

export type BaseProps = ComponentBaseAttrs<Props, HTMLDivElement>;

export default Base;
