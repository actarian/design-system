import Flex from '@components/flex/flex';
import { ComponentAttrs } from '@components/types';
import { setClass } from '@components/utils';

import styled from 'styled-components';

type Props = {
}

export type HeaderProps = ComponentAttrs<Props, HTMLDivElement>;

const HeaderContainer = styled.div.attrs(setClass<HeaderProps>('header'))`
  display: flex;
  align-items: center;
  min-height: 120px;
  background: var(--color-alternative-100);
  color: var(--color-neutral-900);
`;

const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer {...props}>
      <Flex.Container width="100%" maxWidth="Min(1440px, calc(100% - 64px))" padding="1em">
        <Flex>L</Flex>
        <Flex>{props.children}</Flex>
        <Flex>R</Flex>
      </Flex.Container>
    </HeaderContainer>
  );
}

export default Header;
